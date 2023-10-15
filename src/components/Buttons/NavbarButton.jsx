import React from "react";
import { Link } from "react-router-dom";

const NavbarButton = (props) => {
    return(
        <Link to={props.to} className="hs-collapse-toggle sm:py-6 glow"><p>{props.children}</p></Link>
    )
}

export default NavbarButton;