import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import iconSprite from "../../assets/sprite/sprite.svg";
import s from './Logo.module.scss'

export const Logo = () => {
    return (
        <div className={s.logo} onClick={() => {
            scroll.scrollToTop()
        }}>
            <svg fill="#72E2AEFF"
                 width='30'
                 height='30'
                 viewBox='0 0 512.000000 512.000000'
                 xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconSprite}#portfolio`}/>
            </svg>
            <span>Julia Popova</span>
        </div>
    )
}