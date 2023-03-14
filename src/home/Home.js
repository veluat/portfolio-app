import React from "react";
import s from './Home.module.css';
import sc from './../common/styles/Container.module.css'

export const Home = () => {
    return (
        <div className={s.homeBlock}>
            <div className={sc.container}>
                <div className={s.nameBlock}>
                    <span>HELLO, I AM</span>
                    <h1>Julia Popova</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}
