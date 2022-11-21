import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Col = ({ children, xs, sm, md, lg, xl }) => {
  const classes = {
    ["col-" + xs]: true,
    ["col-sm-" + sm]: true,
    ["col-md-" + md]: true,
    ["col-lg-" + lg]: true,
    ["col-xl-" + xl]: true,
  };

  return <div className={clsx(classes)}>{children}</div>;
};

export default Col;

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};
