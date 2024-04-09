import React from "react";
import s from './Projects.module.scss';
import {Title} from '../common/components/title/Title';
import {Carousel} from "../common/components/carousel/Carousel";
import iconSprite from "../assets/sprite/sprite.svg";

export const Projects = () => {
    return (
        <section id="projects" className={s.projectsBlock}>
            <Title text={'My Projects'} shadowText={'PORTFOLIO'}/>
            <Carousel/>
            {/*<div>
                <svg fill="#72E2AEFF"
                     width='40'
                     height='40'
                     viewBox='0 0 64.000000 64.000000'
                     xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${iconSprite}#left`}/>
                </svg>
            </div>
            <button>
                <svg fill="#72E2AEFF"
                     width='40'
                     height='40'
                     viewBox='0 0 64.000000 64.000000'
                     xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${iconSprite}#right`}/>
                </svg>
            </button>*/}
        </section>
    )
}
