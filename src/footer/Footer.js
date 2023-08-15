import React from "react";
import s from './Footer.module.scss';
import {SocialNetBlock} from "../common/components/socialNetBlock/SocialNetBlock";
import {LinkPadding} from "../common/components/linkPadding/LinkPadding";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <SocialNetBlock/>
                <LinkPadding section={"Julia Popova"} path={"home"} className={s.name}/>
            </div>
            <div className={s.copyrightBlock}>
                <p className={s.copyright}>Copyright © 2023. All Rights Reserved</p>
            </div>
        </div>
    );
}
