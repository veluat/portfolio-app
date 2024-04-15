import React from 'react';
import s from './Burger.module.scss'

export const Burger = ({setActive, active}) => {

    const onClickHandler = (value) => {
        setActive(value)
    }

    return (
        <>
            {!active ?
                <div onClick={() => {
                    onClickHandler(true)
                }} className={s.container}>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                </div>
                : <div onClick={() => {
                    onClickHandler(false)
                }} className={s.container}>
                    <span className={s.close1}></span>
                    <span className={s.close2}></span>
                </div>
            }
        </>
    )
}