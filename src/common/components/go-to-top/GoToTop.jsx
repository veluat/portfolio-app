import React, {useEffect, useState} from 'react';
import {DirectionBtn} from "../direction-btn/DirectionBtn";
import s from './GoToTop.module.scss'
import {animateScroll as scroll} from "react-scroll";
import Fade from "react-reveal/Fade";

export const GoToTop = () => {
    const [showBtn, setShowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 750 ? setShowBtn(true) : setShowBtn(false)
        })
    }, [])

    return (
        <Fade right>
            {showBtn && (
                <div className={s.wrapper}
                     onClick={() => {
                         scroll.scrollToTop()
                     }}>
                    <DirectionBtn id='top'/>
                </div>
            )}
        </Fade>
    )
}