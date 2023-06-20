import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import {Link} from 'react-scroll';

export const BurgerNav = () => {
    const [active, setActive] = useState(false);
    const onClickHandler = () => {
        setActive(!active)
    }
    return (
        <div className={s.burgerNav}>
            <div className={active ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link activeClass={s.active} to="home" spy={true} smooth={true} offset={0} duration={500}>
                    Home
                </Link>
                <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={0} duration={500}>
                    Skills
                </Link>
                <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={0} duration={500}>
                    Projects
                </Link>
                <Link activeClass={s.active} to="remoteWork" spy={true} smooth={true} offset={0} duration={500}>
                    Remote work
                </Link>
                <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={0} duration={500}>
                    Contacts
                </Link>
                <Link activeClass={s.active} to="resume" spy={true} smooth={true} offset={0} duration={500}>
                    Download resume
                </Link>
            </div>
            <div className={s.burgerBtn} onClick={onClickHandler}></div>
        </div>
    );
}
