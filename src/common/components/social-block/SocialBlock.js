import s from "./SocialBlock.module.scss";
import iconSprite from "../../../assets/sprite/sprite.svg";
import React from "react";
import {SocialsData} from "./socials-data/SocialsData";

export const SocialBlock = () => {
    return (
        <div className={s.boxContainer}>
            {SocialsData.map(el => {
                return (
                    <div key={el.id} className={s.box}>
                        <a key={el.id} className={s.icon} href={el.href} target="_blank" rel="noreferrer">
                            <svg key={el.id} fill="#FAFAFAFF"
                                 width='30px'
                                 height='30px'
                                 viewBox='0 0 200 200'
                                 xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref={`${iconSprite}#${el.sprId}`}/>
                            </svg>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}