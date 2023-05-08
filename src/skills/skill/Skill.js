import React from "react";
import s from './Skill.module.scss';

export const Skill = ({src, alt, title, description}) => {
    return (
        <div className={s.skill}>
            <img className={s.icon} src={src} alt={alt}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
