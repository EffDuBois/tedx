import React from "react";
import logo from "../../resources/images/logo-TEDx_white.png";
import { Link } from "react-router-dom";

const TEDxLogo = () => {
  return (
    <Link className="flex-none w-4/5 p-5" to="/">
      <img src={logo} alt="Tedx logo" />
    </Link>
  );
};

export default TEDxLogo;
