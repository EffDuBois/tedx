import React from "react";
import { Link } from "react-router-dom";

const NavbarButton = (props) => {
  return (
    <Link
      to={props.to}
      className="hs-collapse-toggle lg:px-3 text-invert hover:bg-main hover:text-main flex justify-center items-center min-w-[8vw]"
    >
      <p className="sm:text-2xl">{props.children}</p>
    </Link>
  );
};

export default NavbarButton;
