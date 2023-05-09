import React from "react";
import s from './Title.module.scss';

export const Title = (props) => {
    return (
        <div className={s.projectTitle}>
            <span className={s.projectTitleLine2}>
                        <span className={s.projectSlider2}/>
                    </span>
            <h2>{props.text}</h2>
            <span className={s.projectTitleLine}>
                        <span className={s.projectSlider}/>
                    </span>
            <span className={s.projectTitleShadow}>{props.shadowText}</span>
        </div>
    );
}
