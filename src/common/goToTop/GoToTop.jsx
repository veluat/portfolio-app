import React, {useEffect, useState} from 'react';
import {DirectionBtn} from "../components/directionBtn/DirectionBtn";
import s from './GoToTop.module.scss'
import {animateScroll as scroll} from "react-scroll";

export const GoToTop = () => {
    const [showBtn, setShowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 750) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (<div className={s.wrapper} onClick={() => {
                scroll.scrollToTop()
            }}>
                <DirectionBtn id='top'/>
            </div>)}
        </>
    )
}