import React from "react";
import s from './Skill.module.scss';

export const Skill = ({src, alt, title, description, style}) => {
    return (
        <div className={s.skill}>
            <div>
                <img className={s.icon} src={src} alt={alt}></img>
            </div>
            <div className={s.progress}>
                <div>
                    <h3>{title}</h3>
                    <div className={s.primary}>{description}</div>
                    <div className={s.progressBar}>
                        <div className={s.primaryProgress} style={style}></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
