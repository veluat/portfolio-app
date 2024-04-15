import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import {Burger} from "../burger/Burger";
import {NavLink} from "../../../common/components/nav-link/NavLink";
import {Modal} from "../../../common/components/modal/Modal";

export const BurgerNav = ({data}) => {
    const [active, setActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    function handlerModalSet(modal) {
        setModalActive(!modalActive)
    }

    let finallyClass = (active === true ? `${s.burgerNavPadding} ${s.show}` :
        `${s.burgerNavPadding}`)

    const onClickHandler = () => {
        setActive(false)
    }

    return (
        <nav className={s.burgerNav}>
            <ul onClick={onClickHandler} className={finallyClass}>
                {data.menuItems.map((el, index) => {
                    return (
                        <li key={index}>
                            <NavLink init={el.init} section={el.section} path={el.path}
                                     onClickHandlerProps={onClickHandler} activeClass={s.active} setActive={setActive}
                                     active={active}/>
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
                    close={data.close}
                />
            )}
            <Burger setActive={setActive} active={active}/>
        </nav>
    );
}
