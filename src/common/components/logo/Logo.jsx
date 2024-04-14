import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import s from './Logo.module.scss'
import {Icon} from "../icon/Icon";

export const Logo = ({logoTitle}) => {
    return (
        <div className={s.logo} onClick={() => {scroll.scrollToTop()}}>
            <Icon sprId='portfolio'
                  fill="#72E2AEFF"
                  width='30'
                  height='30'
                  viewBox='0 0 512 512'
            />
            <span>{logoTitle}</span>
        </div>
    )
}