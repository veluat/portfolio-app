import todoImage from "./../../assets/images/todolist.jpeg";
import socialImage from "./../../assets/images/socialNetwork.jpg";
import cardsImage from "./../../assets/images/learning-cards.jpg";
import taxiImage from "./../../assets/images/taxi-services.jpg";
import art from "./../../assets/images/art.jpg";

export const ProjectData = [
    {
        title: 'TO-DO LIST',
        description: 'Create, edit and delete yours To-do lists, manage tasks that can be customized for you. React project with Redux Toolkit, TS, MUI, React Router Dom, Axios, Formik',
        bg: {
            backgroundImage: 'url(' + todoImage + ')',
        },
        buttonType: 'Demo',
        link: 'https://veluat.github.io/task-manager'
    },
    {
        title: 'SOCIAL NETWORK',
        description: 'A social network that implements adding and deleting friends, authorization, sending messages etc. React project with Redux, Axios, TS, React Hook Form',
        bg: {
            backgroundImage: 'url(' + socialImage + ')',
        },
        buttonType: 'Demo',
        link: 'https://veluat.github.io/social-network'
    },
    {
        title: 'TAXI SERVICES',
        description: 'Example of a business website. Images and text are created by AI. The design was developed by me. Used React, CSS, JavaScript, React Router Dom',
        bg: {
            backgroundImage: 'url(' + cardsImage + ')',
        },
        buttonType: 'Demo',
        link: 'https://example-of-a-business-website.netlify.app'
    },
    {
        title: 'LEARNING CARDS',
        description: 'Flashcard learning app to help you learn new topics. React project with Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI',
        bg: {
            backgroundImage: 'url(' + taxiImage + ')',
        },
        buttonType: 'Demo',
        link: 'https://cards-two-self.vercel.app'
    },
    {
        title: 'CREATIVE ART',
        description: 'A web development project for a simple and secure platform for purchasing and exchanging digital ART and NFTs. React project with TS, Styled Components',
        bg: {
            backgroundImage: 'url(' + art + ')',
        },
        buttonType: 'Demo',
        link: 'https://veluat.github.io/creative-art-layout'
    }
]