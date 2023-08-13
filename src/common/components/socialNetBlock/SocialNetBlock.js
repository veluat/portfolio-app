import s from "./SocialNetBlock.module.scss";
import telegram from "../../../assets/images/telegram.png";
import github from "../../../assets/images/github.png";
import linkedin from "../../../assets/images/linkedin.png";
import codewars from "../../../assets/images/codewars.png";
import React from "react";

export const SocialNetBlock = () => {

    return (
        <div className={s.boxContainer}>
            <div className={s.box}>
                <a href="https://t.me/veluat" target="_blank">
                    <img className={s.icon} src={telegram} alt={''}></img>
                </a>
            </div>
            <div className={s.box}>
                <a href="https://github.com/veluat" target="_blank">
                    <img className={s.icon} src={github} alt={''}></img>
                </a>
            </div>
            <div className={s.box}>
                <a href="https://www.linkedin.com/in/julia-popova-developer/" target="_blank">
                    <img className={s.icon} src={linkedin} alt={''}></img>
                </a>
            </div>
            <div className={s.box}>
                <a href="https://www.codewars.com/users/veluat" target="_blank">
                    <img className={s.icon} src={codewars} alt={''}></img>
                </a>
            </div>
        </div>
    )
}