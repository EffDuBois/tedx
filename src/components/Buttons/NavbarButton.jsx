import React from "react";
import { Link } from "react-router-dom";

const NavbarButton = (props) => {
    return(
        <Link to={props.to} className="sm:py-6 glow">{props.children}</Link>
    )
}

export default NavbarButton;