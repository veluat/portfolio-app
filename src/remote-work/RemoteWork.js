import React from "react";
import s from './RemoteWork.module.css';
import sc from "../common/styles/Container.module.css";


export const RemoteWork = () => {
    return (
        <div className={s.workFromHomeBlock}>
            <div className={`${sc.container} ${s.workFromHomeContainer}`}>
                <div className={s.content}>
                    <h2 className={s.title}>Remote work possible</h2>
                    <a className={s.getInTouch}>Get in Touch</a>
                </div>
            </div>
        </div>
    );
}
