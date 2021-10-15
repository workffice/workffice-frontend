import { CloudinaryContext, Image } from 'cloudinary-react';
import PropTypes from "prop-types";

export const Cloudinary = ({ publicId, width = "0.5"}) => {
    return <CloudinaryContext cloudName="workffice">
        <Image publicId={publicId || "sample"} width={width}></Image>
    </CloudinaryContext>
}


Cloudinary.propTypes = {
    publicId: PropTypes.string,
    width: PropTypes.string,
}