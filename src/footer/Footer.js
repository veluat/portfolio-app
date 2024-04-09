import React from "react";
import s from './Footer.module.scss';
import {SocialBlock} from "../common/components/socialBlock/SocialBlock";
import {NavLink} from "../common/components/navLink/NavLink";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <SocialBlock/>
                <NavLink section={"Julia Popova"} path={"home"} className={s.name}/>
            </div>
            <small className={s.copyrightBlock}>
                <p className={s.copyright}>Copyright © 2023. All Rights Reserved</p>
            </small>
        </footer>
    );
}
