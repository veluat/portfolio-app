import React from "react";
import s from './RemoteWork.module.scss';
import {Title} from "../common/components/title/Title";

export const RemoteWork = () => {
    return (
        <div id="remoteWork" className={s.workFromHomeBlock}>
            <Title text={'Remote work possible'} shadowText={'Freelance'}/>
            <div className={s.workFromHomeContainer}>
                <div className={s.content}>
                    <button className={s.getInTouch}>
                        <span>Get in Touch</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
