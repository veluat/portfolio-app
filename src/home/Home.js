import React from "react";
import s from './Home.module.scss';
import avatar from "../assets/images/myPhotoBlWt.png";

export const Home = () => {
    return (
        <div className={s.homeBlock}>
            <div className={s.container}>
                <div className={s.photo}>
                    <img className={s.avatar} src={avatar} alt=""/>
                </div>
                <div className={s.textContainer}>
                    <h1 className={s.nameBlock}>
                        <span>Hi, my name is </span>
                        <span className={s.spanPrimary}>Julia Popova</span>
                    </h1>
                    <p className={s.description}>I am a junior frontend developer, and I'm very passionate and dedicated
                        to my work.
                        <br/>
                        I have acquired the skills and knowledge.</p>
                </div>
            </div>
        </div>
    );
}
