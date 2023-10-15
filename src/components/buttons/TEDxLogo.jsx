import React from "react";
import logo from "../../resources/images/logos/tedx/logo-TEDx_black.png";
import { Link } from "react-router-dom";

const TEDxLogo = () => {
  return (
    <Link className="flex-none" to="/">
      <img src={logo} alt="Tedx logo" />
    </Link>
  );
};

export default TEDxLogo;
