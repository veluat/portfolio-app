import React from 'react';
import s from './Project.module.scss';

export const Project = ({style, projectButton, projectDescription, projectTitle, link}) => {
    return (
        <div className={s.project}>
            <div className={s.projectImg} style={style}>
                <a href={link} target={'_blank'}
                   className={projectButton !== 'Coming soon' ? s.projectButton : s.disabled} rel="noreferrer">{projectButton}</a>
            </div>
            <div className={s.projectText}>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
            </div>
        </div>
    );
}
