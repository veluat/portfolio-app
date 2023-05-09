import React from "react";
import s from './Projects.module.scss';
import sc from '../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg';
import socialImage from './../assets/images/social-network.jpg';

export const Projects = () => {
    const todolist = {
        backgroundImage: 'url(' + todoImage + ')',
    };
    const socialNetwork = {
        backgroundImage: 'url(' + socialImage + ')',
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <Title text={'My Projects'} shadowText={'PORTFOLIO'}/>
                <div className={s.projects}>
                    <Project style={todolist} projectTitle={'To-do list'}
                             projectDescription={'Lorem ipsum dolor sit amet elit suscipit orci.'}/>
                    <Project style={socialNetwork} projectTitle={'Social network'}
                             projectDescription={'Lorem ipsum dolor sit amet elit suscipit orci.'}/>
                </div>
            </div>
        </div>
    );
}
