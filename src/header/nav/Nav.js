import React from "react";
import s from './Nav.module.scss';
import {NavPadding} from "../../common/components/navPadding/NavPadding";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavPadding/>
        </div>
    );
}
