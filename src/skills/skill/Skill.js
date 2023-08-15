import React from "react";
import s from './Skill.module.scss';
import Fade from 'react-reveal/Fade';

export const Skill = ({src, alt, title}) => {
    return (
        <div className={s.skill}>
            <Fade bottom>
                <div className={s.progress}>
                    <img className={s.icon} src={src} alt={alt}></img>
                </div>
                <h3>{title}</h3>
            </Fade>
        </div>
    )
}
