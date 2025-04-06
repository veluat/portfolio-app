import React from "react";
import s from './Footer.module.scss';
import {SocialBlock} from "../../common/components/social-block/SocialBlock";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <SocialBlock/>
            </div>
            <small className={s.copyrightBlock}>
                <p className={s.copyright}>Copyright © 2023-2025. All Rights Reserved</p>
            </small>
        </footer>
    );
}
