import React from "react";
import s from './Nav.module.scss';
import {LinkPadding} from "../../common/components/linkPadding/LinkPadding";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.navPadding}>
                <LinkPadding section={"Home"} path={"home"} activeClass={s.active}/>
                <LinkPadding section={"Skills"} path={"skills"} activeClass={s.active}/>
                <LinkPadding section={"Projects"} path={"projects"} activeClass={s.active}/>
                <LinkPadding section={"Remote work"} path={"remoteWork"} activeClass={s.active}/>
                <LinkPadding section={"Contacts"} path={"contacts"} activeClass={s.active}/>
                <LinkPadding section={"Download resume"} path={"resume"} className={s.resume}/>
            </div>
        </div>
    )
}
