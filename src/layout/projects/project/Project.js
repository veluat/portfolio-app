import React from 'react';
import s from './Project.module.scss';

export const Project = ({style, projectDescription, projectTitle, demoLink, demoBtn, codeLink, codeBtn}) => {
    const links = [
        {link: demoLink, label: demoBtn},
        {link: codeLink, label: codeBtn}
    ];

    const finallyClass = demoBtn === 'Coming soon' ? `${s.projectButton} ${s.disabled}` : demoBtn === 'В разработке' ? `${s.projectButton} ${s.disabled}` : s.projectButton;

    const finallyTarget = demoBtn === 'Coming soon' ? '' : demoBtn === 'В разработке' ? '' : '_blank'

    const handleClick = (event, demoBtn) => {
        if (demoBtn === 'Coming soon') {
            event.preventDefault();
        } if (demoBtn === 'В разработке') {
            event.preventDefault();
        } else {}
    }

    return (
        <div className={s.project}>
            <div className={s.projectImg} style={style}></div>
            <div className={s.projectText}>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
            </div>
            <div className={s.btnFlex}>
                {links.map(({link, label}) => (
                    <a
                        key={link}
                        href={link}
                        target={finallyTarget}
                        className={finallyClass}
                        onClick={(event) => handleClick(event, demoBtn)}
                        rel="noreferrer"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </div>
    )
}
