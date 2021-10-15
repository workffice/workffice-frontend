/*!

=========================================================
* Paper Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// used for making the prop types of this component
import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";
import defaultImage from "../../../assets/img/bg/image_placeholder.jpg";
import defaultAvatar from "../../../assets/img/bg/logoCirculo.svg";



function ImageUpload(props) {
  const [fileState, setFileState] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? defaultAvatar : defaultImage
  );
  const fileInput = React.useRef();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFileState(file);
      setImagePreviewUrl(reader.result);
      props.onChange(reader.result)
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    fileInput.current.value = null;
    setFileState(null);
    setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage);
  };

  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div className={"thumbnail" + (props.avatar ? " img-circle" : "")}>
        <img src={imagePreviewUrl} alt="..." />
      </div>
      <div>
        {fileState === null ? (
          <Button className="btn-round" onClick={() => handleClick()}>
            {props.avatar ? "Añadir foto" : "Seleccionar imagen"}
          </Button>
        ) : (
          <span>
            <Button className="btn-round" onClick={() => handleClick()}>
              Cambiar
            </Button>
            {props.avatar ? <br /> : null}
            <Button
              color="danger"
              className="btn-round"
              onClick={() => handleRemove()}
            >
              <i className="fa fa-times" />
              Quitar
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ImageUpload;
