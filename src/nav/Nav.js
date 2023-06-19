import React from "react";
import s from './Nav.module.scss';
import * as Scroll from 'react-scroll';
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.link}>
                <a href="">Home</a>
                <a href="">Skills</a>
                {/*
                <a href="#projects">Projects</a>
*/}
                <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={0} duration={500}
                      /*onSetActive={this.handleSetActive}*/>
                    Projects
                </Link>
                <a href="">Remote work</a>
                <a href="">Contacts</a>
                <a className={s.resume} href="">Download resume</a>
            </div>
        </div>
    );
}
