import React from "react";
import s from './Title.module.scss';

export const Title = ({text, shadowText}) => {
    return (
        <div className={s.projectTitle}>
            <h2>{text}</h2>
            <span className={s.projectTitleLine}>
            <span className={s.projectSlider}/></span>
            <span className={s.projectTitleShadow}>{shadowText}</span>
        </div>
    );
}
