import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import {NavPadding} from "../../common/components/navPadding/NavPadding";

export const BurgerNav = () => {
    const [active, setActive] = useState(false);
    const onClickHandler = () => {
        setActive(!active)
    }

    return (
        <div className={s.burgerNav}>
            <div>
                <NavPadding active={active}/>
            </div>
            <div className={s.burgerBtn} onClick={onClickHandler}></div>
        </div>
    );
}
