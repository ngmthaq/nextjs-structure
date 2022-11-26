import React from "react";
import SeoLayout from "../SeoLayout";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children, title, description, url, imgUrl }) => {
  return (
    <SeoLayout
      title={title}
      description={description}
      url={url}
      imgUrl={imgUrl}
    >
      <Header />
      <div className="main-layout">{children}</div>
      <Footer />
    </SeoLayout>
  );
};

export default MainLayout;
