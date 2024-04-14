import React, {useContext} from "react";
import s from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";
import {Logo} from "../../common/components/logo/Logo";
import {LocaleContext} from "../../common/utils/locale-context/LocaleContext";
import {HeaderData} from "./header-data/HeaderData";

export const Header = () => {
    const { locale } = useContext(LocaleContext);
    return (
        <header className={s.headerWrapper}>
            <div className={s.nav}>
                <Logo logoTitle={HeaderData[locale].logoTitle}/>
                <Nav data={HeaderData[locale]}/>
                <BurgerNav data={HeaderData[locale]}/>
            </div>
            <span className={s.line}></span>
        </header>
    )
}
