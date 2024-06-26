import { Link } from "react-scroll";
import React from "react";

export const NavLink = ({ path, className, activeClass, section, onClickHandlerProps }) => {
    return (
        <Link
            onClick={onClickHandlerProps}
            activeClass={activeClass}
            to={path}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={className}
        >
            {section}
        </Link>
    )
}