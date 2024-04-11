import React from "react";
import s from './Main.module.scss';
import avatar from "../assets/images/myPhoto.png";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-scroll";
import {SocialBlock} from "../common/components/socialBlock/SocialBlock";
import {NavLink} from "../common/components/navLink/NavLink";
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (
        <section id="home" className={s.mainBlock}>
            <Fade left>
                <div className={s.photo}>
                    <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom"
                          glareBorderRadius="20px">
                        <img className={s.ava} src={avatar} alt="Popova"/>
                    </Tilt>
                </div>
            </Fade>
            <Fade right>
                <div className={s.textContainer}>
                    <h1 className={s.nameBlock}>
                        <p>Frontend Web Developer</p>
                        <span>I am </span>
                        <ReactTypingEffect
                            text={["Julia Popova", "Frontend Developer", "Web Developer"]}
                            speed={100}
                            eraseSpeed={40}
                            eraseDelay={1000}
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
                        <SocialBlock/>
                    </div>
                    <button className={s.getInTouch}>
                        <NavLink section={"Hire me"} path={"contacts"}/>
                    </button>
                    <div className={s.scroll}>
                        <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
                            Scroll down
                        </Link>
                    </div>
                </div>
            </Fade>
        </section>
    );
}
