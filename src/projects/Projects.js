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
        <div id="projects" className={s.projectsBlock}>
            <Title text={'My Projects'} shadowText={'PORTFOLIO'}/>
            <Fade bottom>
                <div className={s.projectsContainer}>
                    <div className={s.projects}>
                        <div className={s.projectGrid}>
                            <Project style={todolist} projectTitle={'TO-DO list'}
                                     projectDescription={`Create, edit and delete TO-DO lists, manage tasks that can be customized for you. Used universal components, React, Redux Toolkit, ReduxThunk, Axios, TS, Formik, Material UI, Axios, ReduxThunk`}/>
                        </div>
                        <div className={s.projectGrid}>
                            <Project style={socialNetwork} projectTitle={'Social network'}
                                     projectDescription={`A social network that implements adding and deleting friends, authorization, sending messages etc. Used class and functional components, React, Redux, ReduxThunk, Axios, Redux-Form and other libraries`}/>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
