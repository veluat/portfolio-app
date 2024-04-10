import todoImage from "./../../assets/images/projects/todo.svg";
import socialImage from "./../../assets/images/projects/network.svg";
import cardsImage from "./../../assets/images/projects/cards.svg";
import taxiImage from "./../../assets/images/projects/taxi.svg";
import art from "./../../assets/images/projects/art.svg";
import weather from "./../../assets/images/projects/weather.svg";

export const ProjectData = [
    {
        title: 'TO-DO LIST',
        description: 'Create, edit and delete yours To-do lists, manage tasks that can be customized for you. React project with Redux Toolkit, TS, MUI, React Router Dom, Axios, Formik',
        bg: {
            backgroundImage: 'url(' + todoImage + ')',
        },
        sprId: 'todo-list',
        demoBtn: 'Demo',
        demoLink: 'https://veluat.github.io/task-manager',
        codeLink: 'https://github.com/veluat/task-manager',
        codeBtn: 'Code'
    },
    {
        title: 'SOCIAL NETWORK',
        description: 'A social network that implements adding and deleting friends, authorization, sending messages etc. React project with Redux, Axios, TS, React Hook Form',
        bg: {
            backgroundImage: 'url(' + socialImage + ')',
        },
        sprId: 'network',
        demoBtn: 'Demo',
        demoLink: 'https://veluat.github.io/social-network',
        codeLink: 'https://github.com/veluat/social-network',
        codeBtn: 'Code'
    },
    {
        title: 'TAXI SERVICES',
        description: 'Example of a business website. Images and text are created by AI. The design was developed by me. Used React, CSS, JavaScript, React Router Dom',
        bg: {
            backgroundImage: 'url(' + taxiImage + ')',
        },
        sprId: 'taxi',
        demoBtn: 'Demo',
        demoLink: 'https://example-of-a-business-website.netlify.app',
        codeLink: 'https://github.com/veluat/taxi-services',
        codeBtn: 'Code'
    },
    {
        title: 'LEARNING CARDS',
        description: 'Flashcard learning app to help you learn new topics. React project with Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI',
        bg: {
            backgroundImage: 'url(' + cardsImage + ')',
        },
        sprId: 'cards',
        demoBtn: 'Demo',
        demoLink: 'https://cards-two-self.vercel.app',
        codeLink: 'https://github.com/veluat/cards',
        codeBtn: 'Code'
    },
    {
        title: 'CREATIVE ART',
        description: 'A web development project for a simple and secure platform for purchasing and exchanging digital ART and NFTs. React project with TS, Styled Components',
        bg: {
            backgroundImage: 'url(' + art + ')',
        },
        sprId: 'creative-art',
        demoBtn: 'Demo',
        demoLink: 'https://veluat.github.io/creative-art-layout',
        codeLink: 'https://github.com/veluat/creative-art-layout',
        codeBtn: 'Code'
    },
    {
        title: 'WEATHER',
        description: 'SPA allows users to view the weather information of a specific city. React project with Redux-Toolkit, Axios, React router dom',
        bg: {
            backgroundImage: 'url(' + weather + ')',
        },
        sprId: 'weather',
        demoBtn: 'Coming soon',
        demoLink: '#',
        codeLink: '#',
        codeBtn: 'Code'
    }
]