import React from "react";
import s from './Footer.module.scss';
import {SocialNetBlock} from "../common/components/socialNetBlock/SocialNetBlock";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <SocialNetBlock/>
                <p className={s.name}>Julia Popova</p>
            </div>
            <div className={s.copyrightBlock}>
                <p className={s.copyright}>Copyright © 2023. All Rights Reserved</p>
            </div>
        </div>
    );
}
