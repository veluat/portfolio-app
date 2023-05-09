import React from "react";
import s from './RemoteWork.module.scss';
import sc from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";


export const RemoteWork = () => {
    return (
        <div className={s.workFromHomeBlock}>
            <div className={`${sc.container} ${s.workFromHomeContainer}`}>
                <div className={s.content}>
                    <Title className={s.title} text={'Remote work possible'}  shadowText={'Freelance'}/>
                    <button className={s.getInTouch}>
                        <span>Get in Touch</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
