import React from "react";
import { Link } from "react-router-dom";

const NavbarButton = (props) => {
    return(
        <Link className="sm:py-6 glow">{props.children}</Link>
    )
}

export default NavbarButton;