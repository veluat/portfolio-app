import React from "react";
import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg';
import socialImage from './../assets/images/social-network.jpg';
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    const todolist = {
        backgroundImage: 'url(' + todoImage + ')',
    };
    const socialNetwork = {
        backgroundImage: 'url(' + socialImage + ')',
    };
    return (
        <div className={s.projectsBlock}>
            <Title text={'My Projects'} shadowText={'PORTFOLIO'}/>
            <Fade bottom>
            <div className={s.projectsContainer}>
                <div className={s.projects}>
                    <div className={s.projectGrid}>
                        <Project style={todolist} projectTitle={'To-do list'}
                                 projectDescription={'Lorem ipsum dolor sit amet elit suscipit orci.'}/>
                    </div>
                    <div className={s.projectGrid}>
                        <Project style={socialNetwork} projectTitle={'Social network'}
                                 projectDescription={'Lorem ipsum dolor sit amet elit suscipit orci.'}/>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
}
