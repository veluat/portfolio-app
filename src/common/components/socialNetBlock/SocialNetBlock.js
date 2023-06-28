import s from "./SocialNetBlock.module.scss";
import telegram from "../../../assets/images/telegram.png";
import github from "../../../assets/images/github.png";
import linkedin from "../../../assets/images/linkedin.png";
import instagram from "../../../assets/images/instagram.png";
import React from "react";

export const SocialNetBlock = ({marginTop}) => {

    return (
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
    )
}