import React from "react";
import s from './Nav.module.scss';
import {LinkPadding} from "../../common/components/linkPadding/LinkPadding";
import resume from '../../assets/resume/Julia-Popova-resume.pdf'

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navPadding}>
                <li>
                    <LinkPadding section={"Home"} path={"home"} activeClass={s.active}/>
                </li>
                <li>
                    <LinkPadding section={"Skills"} path={"skills"} activeClass={s.active}/>
                </li>
                <li>
                    <LinkPadding section={"Projects"} path={"projects"} activeClass={s.active}/>
                </li>
                <li>
                    <LinkPadding section={"Remote work"} path={"remoteWork"} activeClass={s.active}/>
                </li>
                <li>
                    <LinkPadding section={"Contacts"} path={"contacts"} activeClass={s.active}/>
                </li>
                <li>
                    <a className={s.resume} href={resume} download={"resume-Julia-Popova.pdf"}>Download resume</a>
                </li>
            </ul>
        </nav>
    )
}
