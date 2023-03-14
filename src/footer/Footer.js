import React from "react";
import s from './Footer.module.css';
import sc from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Julia Popova</h2>
                <div className={s.boxContainer}>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                </div>
                <span className={s.copyright}>COPYRIGHT © 2023. ALL RIGHTS RESERVED.</span>
            </div>
        </div>
    );
}
