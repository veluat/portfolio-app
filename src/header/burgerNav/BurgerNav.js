import React, {useState} from "react";
import s from './BurgerNav.module.scss';
import {Burger} from "../burger/Burger";
import {LinkPadding} from "../../common/components/linkPadding/LinkPadding";

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
                    <LinkPadding section={"Home"} path={"home"} onClickHandlerProps={onClickHandler}
                                 activeClass={s.active}
                                 setActive={setActive} active={active}/>
                </li>
                <li>
                    <LinkPadding section={"Skills"} path={"skills"} onClickHandlerProps={onClickHandler}
                                 activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <LinkPadding section={"Projects"} path={"projects"} onClickHandlerProps={onClickHandler}
                                 activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <LinkPadding section={"Remote work"} path={"remoteWork"} onClickHandlerProps={onClickHandler}
                                 activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <LinkPadding section={"Contacts"} path={"contacts"} onClickHandlerProps={onClickHandler}
                                 activeClass={s.active} setActive={setActive} active={active}/>
                </li>
                <li>
                    <LinkPadding section={"Download resume"} path={"resume"}/>
                </li>
            </ul>
            <Burger setActive={setActive} active={active}/>
        </nav>
    );
}
