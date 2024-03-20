import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Project} from "../../../projects/project/Project";
import todoImage from "../../../assets/images/todolist.jpeg";
import socialImage from "../../../assets/images/socialNetwork.jpg";
import cardsImage from "../../../assets/images/learning-cards.jpg";
import taxiImage from "../../../assets/images/taxi-services.jpg";
import art from "../../../assets/images/art.jpg";
import s from "./Slider.module.scss"
import './../../styles/slider.css'

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

const items = [
    <div className="item" data-value="1">
        <Project style={todolist}
                 projectTitle={'TO-DO LIST'}
                 projectDescription={`Create, edit and delete yours To-do lists, manage tasks that can be customized for you. React project with Redux Toolkit, TS, MUI, React Router Dom, Axios, Formik`}
                 projectButton={'Demo'}
                 link={'https://veluat.github.io/task-manager'}/>
    </div>,
    <div className="item" data-value="2">
        <Project style={socialNetwork}
                 projectTitle={'SOCIAL NETWORK'}
                 projectDescription={`A social network that implements adding and deleting friends, authorization, sending messages etc. React project with Redux, Axios, TS, React Hook Form`}
                 projectButton={'Demo'}
                 link={'https://veluat.github.io/social-network'}/>
    </div>,
    <div className="item" data-value="3">
        <Project style={taxiServices}
                 projectTitle='TAXI SERVICES'
                 projectDescription={`Example of a business website. Images and text are created by AI. The design was developed by me. Used React, CSS, JavaScript, React Router Dom`}
                 projectButton={'Demo'}
                 link={'https://example-of-a-business-website.netlify.app/'}/>
    </div>,
    <div className="item" data-value="4">
        <Project style={learningCards}
                 projectTitle={'LEARNING CARDS'}
                 projectDescription={`Flashcard learning app to help you learn new topics. React project with Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI`}
                 projectButton={'Demo'}
                 link={'https://cards-two-self.vercel.app'}/>
    </div>,
    <div className="item" data-value="5">
        <Project style={creativeArt}
                 projectTitle={'CREATIVE ART'}
                 projectDescription={`A web development project for a simple and secure platform for purchasing and exchanging digital ART and NFTs. React project with TS, Styled Components`}
                 projectButton={'Demo'}
                 link={'https://veluat.github.io/creative-art-layout/'}/>
    </div>,
]

export const Carousel = () => {

    return (
        <div className={s.slider}>
            <AliceCarousel
                infinite
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={3000}
                animationDuration={1200}
                keyboardNavigation
            />
        </div>
    )
}