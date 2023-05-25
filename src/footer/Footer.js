import React from "react";
import s from './Footer.module.scss';
import github from './../assets/images/github.png'
import telegram from './../assets/images/telegram.png'
import linkedin from './../assets/images/linkedin.png'
import instagram from './../assets/images/instagram.png'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.boxContainer}>
                    <div className={s.box}>
                        <img className={s.icon} src={telegram} alt={''}></img>
                    </div>
                    <div className={s.box}>
                        <img className={s.icon} src={github} alt={''}></img>
                    </div>
                    <div className={s.box}>
                        <img className={s.icon} src={linkedin} alt={''}></img>
                    </div>
                    <div className={s.box}>
                        <img className={s.icon} src={instagram} alt={''}></img>
                    </div>
                </div>
                <p className={s.name}>Julia Popova</p>
            </div>
            <div className={s.copyrightBlock}>
                <p className={s.copyright}>Copyright © 2023. All Rights Reserved</p>
            </div>
        </div>
    );
}
