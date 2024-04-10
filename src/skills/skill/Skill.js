import React from "react";
import s from './Skill.module.scss';

export const Skill = ({src, alt, title}) => {
    return (
        <div className={s.skill}>
            <div className={s.iconWrap}>
                <img className={s.icon} src={src} alt={alt}></img>
            </div>
            <h3>{title}</h3>
        </div>
    )
}
