import React from "react";
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.link}>
                <a href="">Home</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Remote work</a>
                <a href="">Contacts</a>
                <a className={s.resume} href="">Download resume</a>
            </div>
        </div>
    );
}
