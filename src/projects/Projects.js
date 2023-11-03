import React from "react";
import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpeg';
import socialImage from './../assets/images/socialNetwork.jpg';
import cardsImage from './../assets/images/learning-cards.jpg';
import taxiImage from './../assets/images/taxi-services.jpg';
import art from './../assets/images/art.jpg';
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
    const taxiServices = {
        backgroundImage: 'url(' + taxiImage + ')',
    };
    const creativeArt = {
        backgroundImage: 'url(' + art + ')',
    };

    return (
        <section id="projects" className={s.projectsBlock}>
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
                            <Project style={taxiServices} projectTitle='TAXI SERVICES'
                                     projectDescription={`Example of a business website. Images and text are created by AI. The design was developed by me. Used React, CSS, JavaScript, React Router Dom`}
                                     projectButton={'Demo'}
                                     link={'https://example-of-a-business-website.netlify.app/'}/>
                        </div>
                        <div className={s.projectGrid}>
                            <Project style={learningCards} projectTitle={'LEARNING CARDS'}
                                     projectDescription={`Flashcard learning app to help you learn new topics. React project with Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI`}
                                     projectButton={'Demo'} link={'https://cards-two-self.vercel.app'}/>
                        </div>
                        <div className={s.projectGrid}>
                            <Project style={creativeArt} projectTitle={'CREATIVE ART'}
                                     projectDescription={`A web development project for a simple and secure platform for purchasing and exchanging digital ART and NFTs. React project with TS, Styled Components`}
                                     projectButton={'Coming soon'}/>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}
