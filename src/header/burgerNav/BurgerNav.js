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
        <div className={s.burgerNav}>
            <div onClick={onClickHandler} className={finallyClass}>
                <LinkPadding section={"Home"} path={"home"} onClickHandlerProps={onClickHandler} activeClass={s.active}
                             setActive={setActive} active={active}/>
                <LinkPadding section={"Skills"} path={"skills"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                <LinkPadding section={"Projects"} path={"projects"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                <LinkPadding section={"Remote work"} path={"remoteWork"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                <LinkPadding section={"Contacts"} path={"contacts"} onClickHandlerProps={onClickHandler}
                             activeClass={s.active} setActive={setActive} active={active}/>
                <LinkPadding section={"Download resume"} path={"resume"}/>
            </div>
            <Burger setActive={setActive} active={active}/>
        </div>
    );
}
