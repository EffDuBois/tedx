import React from "react";
import logo from "../../resources/images/logos/tedx/logo-TEDx_black.png";
import { Link } from "react-router-dom";
//button which redirects to the homepage
const LogoTedx = () => {
  return (
    <Link className="flex-none" to="/">
      <img src={logo} alt="Tedx logo" />
    </Link>
  );
};

export default LogoTedx;
