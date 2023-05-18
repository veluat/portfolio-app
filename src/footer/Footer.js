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
                <span className={s.name}>Julia Popova</span>
                <div className={s.boxContainer}>
                    <img className={s.box} src={telegram} alt={''}></img>
                    <img className={s.box} src={github} alt={''}></img>
                    <img className={s.box} src={linkedin} alt={''}></img>
                    <img className={s.box} src={instagram} alt={''}></img>
                </div>
                <span className={s.copyright}>Copyright © 2023. All Rights Reserved</span>
            </div>
        </div>
    );
}
