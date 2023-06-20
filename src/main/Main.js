import React from "react";
import s from './Main.module.scss';
import avatar from "../assets/images/myPhotoBlWt.png";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import telegram from "../assets/images/telegram.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import instagram from "../assets/images/instagram.png";

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
                                eraseSpeed={50}
                                eraseDelay={2000}
                                typingDelay={100}
                            />
                        </h1>
                        <p className={s.description}>I am a frontend developer, and I'm very passionate and dedicated
                            to my work.
                            <br/>
                            I have acquired the skills and knowledge.</p>
                        <div className={s.contactsIcons}>
                            <span className={s.emptySpan}></span>
                            <div className={s.boxContainer}>
                                <div className={s.box}>
                                    <img className={s.icon} src={telegram} alt={''}></img>
                                </div>
                                <div className={s.box}>
                                    <img className={s.icon} src={github} alt={''}></img>
                                </div>
                                <div className={s.box}>
                                    <img className={s.icon} src={linkedin} alt={''}></img>
                                </div>
                                <div className={s.box}>
                                    <img className={s.icon} src={instagram} alt={''}></img>
                                </div>
                            </div>
                        </div>
                        <button className={s.getInTouch}>
                            <span>Hire me</span>
                        </button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
