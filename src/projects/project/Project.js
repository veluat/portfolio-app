import React from "react";
import s from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.projectContainer}>
                <div className={s.projectImg}>
                    <a className={s.projectButton}>READ MORE</a>
                </div>
            </div>
            <div className={s.projectText}>
                <h3 className={s.projectTitle}>{props.projectTitle}</h3>
                <span className={s.projectDescription}>{props.projectDescription}</span>
            </div>
        </div>
    );
}
