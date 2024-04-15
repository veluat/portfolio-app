import React from 'react';
import s from './Modal.module.scss'
import en from './../../../assets/resume/Julia-Popova-resume(EN).pdf'
import ru from './../../../assets/resume/Julia-Popova-resume(RU).pdf'
import {Icon} from "../icon/Icon";


export const Modal = ({active, setActive, close}) => {
    const closeHandler = () => {
        setActive(false)
    }
    return (
        <div className={active ? `${s.modalWrap} ${s.active}` : s.modalWrap} onClick={() => setActive(false)}>
            <div className={s.modal_content} onClick={e => e.stopPropagation()}>
                <div className={s.svgCV}>
                    <Icon sprId='cv' width='120' height='120' fill='#72E2AEFF' viewBox='0 0 64 64'/>
                </div>
                <div className={s.cvBtn}>
                    <a className={s.resume} href={en} download="Julia-Popova-resume(EN)">Resume(EN)</a>
                    <a className={s.resume} href={ru} download="Julia-Popova-resume(RU).pdf">Резюме(RU)</a>
                </div>
                <button className={s.close} onClick={closeHandler}>{close}</button>
            </div>

        </div>
    )
}