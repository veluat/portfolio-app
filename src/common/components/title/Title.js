import React from "react";
import s from './Title.module.scss';

export const Title = (props) => {
    return (
        <div className={s.projectTitle}>
            <h2>{props.text}</h2>
            <span className={s.projectTitleLine}>
                        <span className={s.projectSlider}/>
                    </span>
            <span className={s.projectTitleShadow}>{props.shadowText}</span>
        </div>
    );
}
