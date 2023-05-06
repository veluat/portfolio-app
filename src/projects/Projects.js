import React from "react";
import s from './Projects.module.css';
import sc from './../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <div className={s.projectTitle}>
                    <h2>Projects</h2>
                    <span className={s.projectTitleLine}>
                        <span className={s.projectSlider}/>
                    </span>
                    <span className={s.projectTitleShadow}>Projects</span>
                </div>
                <div className={s.projects}>
                    <Project projectTitle={'Todolist'}
                             projectDescription={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Donec molestie velit id libero.Lorem ipsum dolor sit amet elit suscipit orci.Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Donec molestie velit id libero.Lorem ipsum dolor sit amet elit suscipit orci'}/>
                    <Project projectTitle={'Social Network'}
                             projectDescription={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Donec molestie velit id libero.'}/>
                </div>
            </div>
        </div>
    );
}
