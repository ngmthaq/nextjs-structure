import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const NoSSR = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
