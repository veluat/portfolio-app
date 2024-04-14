import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import {Burger} from "../burger/Burger";
import {NavLink} from "../../../common/components/nav-link/NavLink";
import resume from '../../../assets/resume/Julia-Popova-resume.pdf'

export const BurgerNav = ({data}) => {
    const [active, setActive] = useState(false);

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
                    <a className={s.resume} href={resume} download="resume-Julia-Popova.pdf">{data.resume}</a>
                </li>
            </ul>
            <Burger setActive={setActive} active={active}/>
        </nav>
    );
}
