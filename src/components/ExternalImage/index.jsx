import React from "react";
import PropTypes from "prop-types";

const ExternalImage = ({ src, alt, className, ...props }) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default ExternalImage;

ExternalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ExternalImage.defaultProps = {
  className: "",
};
