import React from "react";
import PropTypes from "prop-types";

const Container = ({ fluid, children }) => {
  return fluid ? (
    <div className="container-fluid">{children}</div>
  ) : (
    <div className="container">{children}</div>
  );
};

export default Container;

Container.propTypes = {
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};
