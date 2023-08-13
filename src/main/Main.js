import React from "react";
import s from './Main.module.scss';
import avatar from "../assets/images/myPhotoBlWt.png";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

import {Link} from "react-scroll";
import {SocialNetBlock} from "../common/components/socialNetBlock/SocialNetBlock";

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
                        <p className={s.description}>I am a frontend developer, and I'm very passionate and dedicated
                            to my work.
                            <br/>
                            I have acquired the skills and knowledge in creating SPA
                            <br/>
                            using React, Redux/Redux Toolkit, TypeScript.
                            <br/>
                            I would like to find full-time employment or project work.
                            <br/>
                            Open for your suggestions.</p>
                        <div className={s.contactsIcons}>
                            <span className={s.emptySpan}></span>
                            <SocialNetBlock/>
                        </div>
                        <button className={s.getInTouch}>
                            <span>Hire me</span>
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
