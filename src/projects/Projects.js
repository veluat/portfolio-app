import React from "react";
import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpeg';
import socialImage from './../assets/images/socialNetwork.jpg';
import cardsImage from './../assets/images/learning-cards.jpg';
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    const todolist = {
        backgroundImage: 'url(' + todoImage + ')',
    };
    const socialNetwork = {
        backgroundImage: 'url(' + socialImage + ')',
    };
    const learningCards = {
        backgroundImage: 'url(' + cardsImage + ')',
    };
    return (
        <div id="projects" className={s.projectsBlock}>
            <Title text={'My Projects'} shadowText={'PORTFOLIO'}/>
            <Fade bottom>
                <div className={s.projectsContainer}>
                    <div className={s.projects}>
                        <div className={s.projectGrid}>
                            <Project style={todolist} projectTitle={'TO-DO LIST'}
                                     projectDescription={`Create, edit and delete yours To-do lists, manage tasks that can be customized for you. React project with Redux Toolkit, TS, MUI, React Router Dom, Axios, Formik`}
                                     projectButton={'Demo'} link={'https://veluat.github.io/task-manager'}/>
                        </div>
                        <div className={s.projectGrid}>
                            <Project style={socialNetwork} projectTitle={'SOCIAL NETWORK'}
                                     projectDescription={`A social network that implements adding and deleting friends, authorization, sending messages etc. React project with Redux, Axios, TS, React Hook Form`}
                                     projectButton={'Demo'} link={'https://veluat.github.io/social-network'}/>
                        </div>
                        <div className={s.projectGrid}>
                            <Project style={learningCards} projectTitle={'LEARNING CARDS'}
                                     projectDescription={`Flashcard learning app to help you learn new topics. React project with Redux Toolkit, Axios, TS, React Hook Form, Yup, React Router Dom, Git, Ant design`}
                                     projectButton={'Coming soon'}/>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
