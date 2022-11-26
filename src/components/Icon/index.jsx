import React from "react";
import clsx from "clsx";
import Props from "prop-types";

const Icon = ({ name }) => {
  return <span className={clsx("themify-icons", name)}></span>;
};

export default Icon;

Icon.propTypes = {
  name: Props.string.isRequired,
};
