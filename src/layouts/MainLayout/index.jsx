import React from "react";
import SeoLayout from "../SeoLayout";

const MainLayout = ({ children, title, description, url, imgUrl }) => {
  return (
    <SeoLayout
      title={title}
      description={description}
      url={url}
      imgUrl={imgUrl}
    >
      {children}
    </SeoLayout>
  );
};

export default MainLayout;
