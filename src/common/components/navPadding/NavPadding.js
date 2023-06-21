import {Link} from "react-scroll";
import s from "./NavPadding.module.scss";
import React from "react";

export const NavPadding = (props) => {
    return (
        <div className={props.active === true ? `${s.burgerNavItems} ${s.show}` :
            props.active === false ? `${s.burgerNavItems}` : `${s.navPadding}`}>
            <Link activeClass={s.active} to="home" spy={true} smooth={true} offset={0} duration={500}>
                Home
            </Link>
            <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={0} duration={500}>
                Skills
            </Link>
            <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={0} duration={500}>
                Projects
            </Link>
            <Link activeClass={s.active} to="remoteWork" spy={true} smooth={true} offset={0} duration={500}>
                Remote work
            </Link>
            <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={0} duration={500}>
                Contacts
            </Link>
            <Link className={s.resume} activeClass={s.active} to="resume" spy={true} smooth={true} offset={0}
                  duration={500}>
                Download resume
            </Link>
        </div>
    )
}