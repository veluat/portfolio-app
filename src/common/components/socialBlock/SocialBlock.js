import s from "./SocialBlock.module.scss";
import iconSprite from "../../../assets/sprite/sprite.svg";
import React from "react";

const socials = [
    {
        id: 'telegram-1',
        sprId: 'telegram',
        href: "https://t.me/veluat"
    },
    {
        id: 'gitHub-2',
        sprId: 'gitHub',
        href: "https://github.com/veluat"
    },
    {
        id: 'linkedIn-3',
        sprId: 'linkedIn',
        href: "https://www.linkedin.com/in/julia-popova-developer"
    },
    {
        id: 'codewars-4',
        sprId: 'codewars',
        href: "https://www.codewars.com/users/veluat"
    }
]

export const SocialBlock = () => {
    return (
        <div className={s.boxContainer}>
            {socials.map(el => {
                return (
                    <div key={el.id} className={s.box}>
                        <a key={el.id} className={s.icon} href={el.href} target="_blank" rel="noreferrer">
                            <svg key={el.id} fill="#FAFAFAFF"
                                 width='30px'
                                 height='30px'
                                 viewBox='0 0 200 200'
                                 xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref={`${iconSprite}#${el.sprId}`}/>
                            </svg>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}