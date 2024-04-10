import React from 'react';
import s from './Project.module.scss';

export const Project = ({style, demoBtn, projectDescription, projectTitle, demoLink, codeBtn, codeLink}) => {
    return (
        <div className={s.project}>

            <div className={s.projectImg} style={style}></div>

            <div className={s.projectText}>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
            </div>
            <div className={s.btnFlex}>
                <a href={demoLink}
                   target={demoBtn !== 'Coming soon' ? '_blank' : ''}
                   className={demoBtn !== 'Coming soon' ? s.projectButton : `${s.projectButton} ${s.disabled}`}
                   onClick={(event) => {
                       if (demoBtn === 'Coming soon') {
                           event.preventDefault();
                       }
                   }}
                   rel="noreferrer">{demoBtn}</a>
                <a href={codeLink}
                   target={codeBtn !== 'Coming soon' ? '_blank' : ''}
                   className={demoBtn !== 'Coming soon' ? s.projectButton : `${s.projectButton} ${s.disabled}`}
                   onClick={(event) => {
                       if (codeBtn === 'Coming soon') {
                           event.preventDefault();
                       }
                   }}
                   rel="noreferrer">{codeBtn}</a>
            </div>

        </div>
    );
}
