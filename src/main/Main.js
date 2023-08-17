import React from "react";
import s from './Main.module.scss';
import avatar from "../assets/images/myPhotoBlWt.png";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import {Link} from "react-scroll";
import {SocialNetBlock} from "../common/components/socialNetBlock/SocialNetBlock";
import {LinkPadding} from "../common/components/linkPadding/LinkPadding";

export const Main = () => {
    return (
        <div id="home" className={s.mainBlock}>
            <Fade top>
                <div className={s.container}>
                    <div className={s.photo}>
                        <img className={s.avatar} src={avatar} alt=""/>
                    </div>
                    <div className={s.textContainer}>
                        <h1 className={s.nameBlock}>
                            <span>Hi, I am </span>
                            <ReactTypingEffect
                                text={["Julia Popova", "Frontend Developer"]}
                                speed={100}
                                eraseSpeed={40}
                                eraseDelay={1200}
                                typingDelay={100}
                            />
                        </h1>
                        <p className={s.description}>I'm frontend developer with experience in creating SPA using React,
                            Redux, TS
                            <br/>
                            with knowledge in user interface, testing, and debugging processes.
                            <br/>
                            I'm looking for full-time employment or project work.
                            <br/>
                            I'm very passionate and dedicated to my work.
                            <br/>
                            Open for your job offers.</p>
                        <div className={s.contactsIcons}>
                            <span className={s.emptySpan}></span>
                            <SocialNetBlock/>
                        </div>
                        <button className={s.getInTouch}>
                            <LinkPadding section={"Hire me"} path={"contacts"}/>
                        </button>
                    </div>
                </div>
                <div className={s.scroll}>
                    <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
                        Scroll down
                    </Link>
                </div>
            </Fade>
        </div>
    );
}
