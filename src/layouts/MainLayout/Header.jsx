import React from "react";
import Link from "next/link";
import { AppConst } from "../../const";
import { ExternalImage } from "../../components";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href={AppConst.PATHS.homepage}>
          <ExternalImage
            src="/img/logo-500x170.png"
            alt="Sea Made Me"
            className={"logo-image"}
          />
        </Link>
      </div>
      <div className="nav-bar">
        <nav className="nav-item">
          <span className="ti-download"></span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
