import React, {useContext} from "react";
import s from './RemoteWork.module.scss';
import {Title} from "../../common/components/title/Title";
import {NavLink} from "../../common/components/nav-link/NavLink";
import {LocaleContext} from "../../common/utils/locale-context/LocaleContext";
import {RemoteData} from "./remote-data/RemoteData";

export const RemoteWork = () => {
    const {locale} = useContext(LocaleContext);
    return (
        <section id='remoteWork' className={s.workFromHomeBlock}>
            <Title text={RemoteData[locale].text} shadowText={RemoteData[locale].shadowText}/>
            <div className={s.workFromHomeContainer}>
                <div className={s.content}>
                    <button className={s.getInTouch}>
                        <NavLink section={RemoteData[locale].hire} path='contacts'/>
                    </button>
                </div>
            </div>
        </section>
    )
}
