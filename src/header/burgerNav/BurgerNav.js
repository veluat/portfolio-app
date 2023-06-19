import React from "react";
import s from './BurgerNav.module.scss';
import * as Scroll from 'react-scroll';
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

export const BurgerNav = () => {
    return (
        <div className={s.burgerNav}>

            {/*<a href="">Home</a>*/}
            <Link activeClass={s.active} to="home" spy={true} smooth={true} offset={0} duration={500}>
                Home
            </Link>
            {/*<a href="">Skills</a>*/}
            <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={0} duration={500}>
                Skills
            </Link>
                {/*
                <a href="#projects">Projects</a>
*/}
                <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={0} duration={500}
                      /*onSetActive={this.handleSetActive}*/>
                    Projects
                </Link>
            {/*<a href="">Remote work</a>*/}
            <Link activeClass={s.active} to="remoteWork" spy={true} smooth={true} offset={0} duration={500}>
                Remote work
            </Link>
            {/*<a href="">Contacts</a>*/}
            <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={0} duration={500}>
                Contacts
            </Link>
            <Link activeClass={s.active} to="resume" spy={true} smooth={true} offset={0} duration={500}>
                Download resume
            </Link>
        </div>
    );
}
