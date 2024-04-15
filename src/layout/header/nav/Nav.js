import React, {useState} from "react";
import s from './Nav.module.scss';
import {NavLink} from "../../../common/components/nav-link/NavLink";
import {Modal} from "../../../common/components/modal/Modal";

export const Nav = ({data}) => {
    const [modalActive, setModalActive] = useState(false);
    function handlerModalSet(modal) {
        setModalActive(!modalActive)
    }
    return (
        <nav className={s.nav}>
            <ul className={s.navLink}>
                {data.menuItems.map((el, index) => {
                    return (
                        <li key={index}>
                            <NavLink init={el.init} section={el.section} path={el.path} activeClass={s.active}/>
                        </li>
                    )
                })}
                <li>
                    <button className={s.resume} onClick={handlerModalSet}>{data.resume}</button>
                </li>
            </ul>
            {modalActive && (
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                />
            )}
        </nav>
    )
}
