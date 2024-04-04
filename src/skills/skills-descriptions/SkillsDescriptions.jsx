import React from 'react';
import s from './SkillsDescriptions.module.scss'
import iconSprite from "../../assets/sprite/sprite.svg";

export const SkillsDescriptions = ({title, description, sprId, width, height, viewBox}) => {
    return (
        <div className={s.servicesWrapper}>
            <div className={s.servicesTitle}>
                <span>
                    <svg fill="#72E2AEFF"
                         width={width}
                         height={height}
                         viewBox={viewBox}
                         xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref={`${iconSprite}#${sprId}`}/>
                    </svg>
                </span>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}