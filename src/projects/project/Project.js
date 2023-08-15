import React from 'react';
import s from './Project.module.scss';

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.projectImg} style={props.style}>
                <button className={props.projectButton !== 'Coming soon' ? s.projectButton : s.disabled}>
                    <span>{props.projectButton}</span>
                </button>
            </div>
            <div className={s.projectText}>
                <h3>{props.projectTitle}</h3>
                <p>{props.projectDescription}</p>
            </div>
        </div>
    );
}
