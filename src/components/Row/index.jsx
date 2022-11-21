import React from "react";
import PropTypes from "prop-types";

const Row = ({ children, noGutters }) => {
  return noGutters ? (
    <div className="row no-gutters">{children}</div>
  ) : (
    <div className="row">{children}</div>
  );
};

export default Row;

Row.propTypes = {
  noGutters: PropTypes.bool,
};

Row.defaultProps = {
  noGutters: false,
};
