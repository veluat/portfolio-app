import React from "react";
import s from './Nav.module.scss';
import {NavLink} from "../../common/components/navLink/NavLink";
import resume from '../../assets/resume/Julia-Popova-resume.pdf'
import {HeaderData} from "../header-data/Header-Data";

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navLink}>
                {HeaderData.map(el => {
                    return (
                        <li>
                            <NavLink init={el.init} section={el.section} path={el.path} activeClass={s.active}/>
                        </li>
                    )
                })}
                <li>
                    <a className={s.resume} href={resume} download={"resume-Julia-Popova.pdf"}>Download resume</a>
                </li>
            </ul>
        </nav>
    )
}
