import React from "react";
import s from './Nav.module.scss';
import {NavLink} from "../../../common/components/nav-link/NavLink";
import resume from '../../../assets/resume/Julia-Popova-resume.pdf'

export const Nav = ({data}) => {
    return (
        <nav className={s.nav}>
            <ul className={s.navLink}>
                {data.menuItems.map((el, index) => {
                    return (
                        <li key={index}>
                            <NavLink init={el.init} section={el.section} path={el.path} activeClass={s.active}/>
                        </li>
                    )
                })}
                <li>
                    <a className={s.resume} href={resume} download="resume-Julia-Popova.pdf">{data.resume}</a>
                </li>
            </ul>
        </nav>
    )
}
