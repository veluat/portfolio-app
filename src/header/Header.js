import React from "react";
import s from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.header}>
                <Nav/>
                <BurgerNav/>
            </div>
            <span className={s.border}></span>
        </div>

    );
}
