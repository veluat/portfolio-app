import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import {Burger} from "../burger/Burger";
import {NavLink} from "../../common/components/navLink/NavLink";
import resume from '../../assets/resume/Julia-Popova-resume.pdf'

export const BurgerNav = () => {
    const [active, setActive] = useState(false);

    let finallyClass = (active === true ? `${s.burgerNavPadding} ${s.show}` :
        `${s.burgerNavPadding}`)

    const onClickHandler = () => {
        setActive(false)
    }
    return (
        <nav className={s.burgerNav}>
            <ul onClick={onClickHandler} className={finallyClass}>
                <li>
                    <NavLink section={"Home"} path={"home"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active}
                             setActive={setActive} active={active}/>
                </li>
                <li>
                    <NavLink section={"Skills"} path={"skills"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <NavLink section={"Projects"} path={"projects"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <NavLink section={"Remote work"} path={"remoteWork"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <NavLink section={"Contacts"} path={"contacts"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <a className={s.resume} href={resume} download={"resume-Julia-Popova.pdf"}>Download resume</a>
                </li>
            </ul>
            <Burger setActive={setActive} active={active}/>
        </nav>
    );
}
