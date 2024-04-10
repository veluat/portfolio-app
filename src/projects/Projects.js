import React from "react";
import s from './Projects.module.scss';
import {Title} from '../common/components/title/Title';
import {Carousel} from "../common/components/carousel/Carousel";

export const Projects = () => {
    return (
        <section id="projects" className={s.projectsBlock}>
            <Title text={'My Projects'} shadowText={'PORTFOLIO'}/>
            <Carousel/>
        </section>
    )
}
