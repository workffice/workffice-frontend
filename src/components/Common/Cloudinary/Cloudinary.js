import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import PropTypes from "prop-types";

export const Cloudinary = ({ publicId, width, height, cloudinaryProps }) => {
    return <CloudinaryContext cloudName="workffice">
        <Image publicId={publicId || "sample"} width={width}>
            <Transformation height={height} width={width} {...cloudinaryProps} />
        </Image>
    </CloudinaryContext>
}


Cloudinary.propTypes = {
    publicId: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    cloudinaryProps: PropTypes.object,
}
