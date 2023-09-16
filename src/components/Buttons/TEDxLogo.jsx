import React from "react";
import logo from "../../resources/logo-TEDx_white.png";
import { Link } from "react-router-dom";

const TEDxLogo = () => {
  return (
    <Link className="flex-none w-1/2" to="/">
      <img src={logo} alt="Tedx logo" />
    </Link>
  );
};

export default TEDxLogo;
