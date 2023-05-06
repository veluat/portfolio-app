import React from "react";
import s from './Footer.module.css';
import sc from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <Title text={'Julia Popova'} shadowText={'Popova'}/>
                <div className={s.boxContainer}>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                </div>
                <span className={s.copyright}>Copyright © 2023. All Rights Reserved</span>
            </div>
        </div>
    );
}
