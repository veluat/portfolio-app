import React from "react";
import s from './Main.module.scss';
import avatar from "../assets/images/myPhoto.png";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-scroll";
import {SocialNetBlock} from "../common/components/socialNetBlock/SocialNetBlock";
import {LinkPadding} from "../common/components/linkPadding/LinkPadding";

export const Main = () => {
    return (
        <section id="home" className={s.mainBlock}>
            <Fade top>
                <div className={s.container}>
                    <div className={s.photo}>
                        <img className={s.avatar} src={avatar} alt=""/>
                    </div>
                    <div className={s.textContainer}>
                        <h1 className={s.nameBlock}>
                            <span>I am </span>
                            <ReactTypingEffect
                                text={["Julia Popova", "Frontend Developer"]}
                                speed={100}
                                eraseSpeed={40}
                                eraseDelay={1200}
                                typingDelay={100}
                            />
                        </h1>
                        <p className={s.description}>Frontend developer with experience 1 yr+ in creating SPA using
                            React, Redux, Typescript, JS/ES6+ with knowledge in user interface, testing, and debugging
                            processes.
                            <br/>
                            Open for your job offers.</p>
                        <div className={s.contactsIcons}>
                            <span className={s.emptySpan}>
                                <span className={s.slider}></span>
                            </span>
                            <SocialNetBlock/>
                        </div>
                        <button className={s.getInTouch}>
                            <LinkPadding section={"Hire me"} path={"contacts"}/>
                        </button>
                        <div className={s.scroll}>
                            <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
                                Scroll down
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}
