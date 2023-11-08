import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarButton = (props) => {
  const path = useLocation().pathname
  return (
    <Link
      to={props.to}
      className={`hs-collapse-toggle lg:hover:bg-invert lg:hover:text-invert ${path === props.to ? "lg:bg-invert lg:text-invert bg-main text-main" : ""} flex justify-center items-center lg:w-[11vw] max-md:h-[6vh]`}
    >
      <h5 className="text-center leading-5">{props.children}</h5>
    </Link>
  );
};

export default NavbarButton;
