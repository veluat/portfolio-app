import React from "react";
import s from './RemoteWork.module.scss';
import {Title} from "../common/components/title/Title";
import {NavLink} from "../common/components/navLink/NavLink";

export const RemoteWork = () => {
    return (
        <section id="remoteWork" className={s.workFromHomeBlock}>
            <Title text={'Remote work possible'} shadowText={'Freelance'}/>
            <div className={s.workFromHomeContainer}>
                <div className={s.content}>
                    <button className={s.getInTouch}>
                        <NavLink section={"Hire me"} path={"contacts"}/>
                    </button>
                </div>
            </div>
        </section>
    );
}
