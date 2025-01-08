import todoImage from '../../../assets/images/projects/todo.svg'
import socialImage from '../../../assets/images/projects/network.svg'
import cardsImage from '../../../assets/images/projects/cards.svg'
import taxiImage from '../../../assets/images/projects/taxi.svg'
import artImage from '../../../assets/images/projects/art.svg'
import pizzaImage from '../../../assets/images/projects/pizza.svg'
import weatherImage from '../../../assets/images/projects/weather.svg'
import counterImage from '../../../assets/images/projects/counter.svg'
import treeImage from '../../../assets/images/projects/tree.svg'
import codeImage from '../../../assets/images/projects/code.svg'
import {generateId} from '../../../common/utils/generate-id/generateId'

export const ProjectData = {
  en: {
    project: [
      {
        id: generateId(),
        title: 'TAXI SERVICES',
        description: 'Example of a business website. Images and text are created by AI. The design was developed by me. Used React, CSS, JavaScript, React Router Dom',
        bg: {
          backgroundImage: 'url(' + taxiImage + ')',
        },
        sprId: 'taxi',
        demoBtn: 'Demo',
        demoLink: 'https://taxi-services-layout.netlify.app/',
        codeLink: 'https://github.com/veluat/taxi-services-layout',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'WEATHER-MATTER',
        description: 'SPA allows users to view the weather information of a specific city. React project with Redux-Toolkit, Axios, React router dom',
        bg: {
          backgroundImage: 'url(' + weatherImage + ')',
        },
        sprId: 'weather',
        demoBtn: 'Demo',
        demoLink: 'https://weather-matter.netlify.app/',
        codeLink: 'https://github.com/veluat/weather-matter-app',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'HIERARCHICAL DATA MANAGER',
        description: 'A React app provides a convenient tool for working with hierarchical data. The project with Redux toolkit, Type Script, MUI, SASS',
        bg: {
          backgroundImage: 'url(' + treeImage + ')',
        },
        sprId: 'tree',
        demoBtn: 'Demo',
        demoLink: 'https://node-tree.vercel.app',
        codeLink: 'https://github.com/veluat/tree-node-app',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'DUAL COUNTER',
        description: 'A React app allows users to set the value, as well as increase, decrease, reset the counter. The project with Redux, TS, Local Storage',
        bg: {
          backgroundImage: 'url(' + counterImage + ')',
        },
        sprId: 'counter',
        demoBtn: 'Demo',
        demoLink: 'https://dual-counter.netlify.app/',
        codeLink: 'https://github.com/veluat/dual-counter-app',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'PIZZA-ORDERING',
        description: 'Pizza Ordering Online Store. React Project with Redux Toolkit, Axios, Lodash.Debounce, TypeScript, React Router Dom, React Content Loader (skeleton), Prettier',
        bg: {
          backgroundImage: 'url(' + pizzaImage + ')',
        },
        sprId: 'pizza-ordering',
        demoBtn: 'Demo',
        demoLink: 'https://pizza-ordering-layout.netlify.app/',
        codeLink: 'https://github.com/veluat/pizza-ordering-layout',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'TO-DO LIST',
        description: 'Create, edit and delete yours To-do lists, manage your tasks. React project with Redux Toolkit, TS, MUI, React Router Dom, Axios, Formik',
        bg: {
          backgroundImage: 'url(' + todoImage + ')',
        },
        sprId: 'todo-list',
        demoBtn: 'Demo',
        demoLink: 'https://veluat.github.io/task-manager-app',
        codeLink: 'https://github.com/veluat/task-manager-app',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'SOCIAL NETWORK',
        description: 'A social network that implements adding and deleting friends, authorization, sending messages etc. React project with Redux, Axios, TS, React Hook Form',
        bg: {
          backgroundImage: 'url(' + socialImage + ')',
        },
        sprId: 'network',
        demoBtn: 'Demo',
        demoLink: 'https://veluat.github.io/social-network-app',
        codeLink: 'https://github.com/veluat/social-network-app',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'CREATIVE ART',
        description: 'A web development project for a simple and secure platform for purchasing and exchanging digital ART and NFTs. React project with TS, Styled Components',
        bg: {
          backgroundImage: 'url(' + artImage + ')',
        },
        sprId: 'creative-art',
        demoBtn: 'Demo',
        demoLink: 'https://veluat.github.io/digital-art-layout',
        codeLink: 'https://github.com/veluat/creative-art-layout',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'TEST CODE EDITOR',
        description: 'Simplified online code editor for JavaScript and Python. Returns mock responses for console.log() and print(). React project with Ace Editor, MirageJS, Vite, Sass',
        bg: {
          backgroundImage: 'url(' + codeImage + ')',
        },
        sprId: 'cards',
        demoBtn: 'Demo',
        demoLink: 'https://test-code-editor-ten.vercel.app',
        codeLink: 'https://github.com/veluat/test-code-editor',
        codeBtn: 'Code'
      },
      {
        id: generateId(),
        title: 'LEARNING CARDS',
        description: 'Flashcard learning app to help you learn new topics. React project with Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI',
        bg: {
          backgroundImage: 'url(' + cardsImage + ')',
        },
        sprId: 'cards',
        demoBtn: 'Coming soon',
        demoLink: '#',
        codeLink: '#',
        codeBtn: 'Code'
      },
    ],
    text: 'My Pet Projects',
    shadowText: 'PORTFOLIO'
  },
  ru: {
    project: [
      {
        id: generateId(),
        title: 'УСЛУГИ ТАКСИ',
        description: 'Пример бизнес-сайта. Изображения и текст созданы искусственным интеллектом. Дизайн разработан мной. Использованы React, CSS, JavaScript, React Router Dom',
        bg: {
          backgroundImage: 'url(' + taxiImage + ')',
        },
        sprId: 'taxi',
        demoBtn: 'Демо',
        demoLink: 'https://taxi-services-layout.netlify.app/',
        codeLink: 'https://github.com/veluat/taxi-services-layout',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'ПРОГНОЗ ПОГОДЫ',
        description: 'Приложение позволяет клиенту просматривать информацию о погоде в конкретном городе. Проект React с Redux-Toolkit, Axios, React router dom',
        bg: {
          backgroundImage: 'url(' + weatherImage + ')',
        },
        sprId: 'weather',
        demoBtn: 'Демо',
        demoLink: 'https://weather-matter.netlify.app/',
        codeLink: 'https://github.com/veluat/weather-matter-app',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'ИЕРАРХИЧЕСКИЙ УПРАВЛЯЮЩИЙ ДАННЫМИ',
        description: 'Приложение React предоставляет удобный инструмент для работы с иерархическими данными. Проект с Redux toolkit, Type Script, MUI, SASS',
        bg: {
          backgroundImage: 'url(' + treeImage + ')',
        },
        sprId: 'tree',
        demoBtn: 'Демо',
        demoLink: 'https://node-tree.vercel.app',
        codeLink: 'https://github.com/veluat/tree-node-app',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'СЧЕТЧИК (2 варианта UI)',
        description: '2 UI Счетчик позволяет устанавливать начальное и макс значение, увеличивать, уменьшать и сбрасывать счетчик. Проект React с Redux, TS, localstorage',
        bg: {
          backgroundImage: 'url(' + counterImage + ')',
        },
        sprId: 'counter',
        demoBtn: 'Демо',
        demoLink: 'https://dual-counter.netlify.app/',
        codeLink: 'https://github.com/veluat/dual-counter-app',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'ЗАКАЗ ПИЦЦЫ ОНЛАЙН',
        description: 'Интернет-магазин по заказу пиццы. Проект React с Redux Toolkit, Axios, Lodash.Debounce, TS, React Router Dom, React Content Loader (skeleton), Prettier',
        bg: {
          backgroundImage: 'url(' + pizzaImage + ')',
        },
        sprId: 'pizza-ordering',
        demoBtn: 'Демо',
        demoLink: 'https://pizza-ordering-layout.netlify.app/',
        codeLink: 'https://github.com/veluat/pizza-ordering-layout',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'ПЛАНЕР',
        description: 'Создавайте, редактируйте и удаляйте свои списки дел, управляйте задачами, которые настраиваются. Проект React с Redux Toolkit, TS, MUI, React Router, Axios, Formik',
        bg: {
          backgroundImage: 'url(' + todoImage + ')',
        },
        sprId: 'todo-list',
        demoBtn: 'Демо',
        demoLink: 'https://veluat.github.io/task-manager-app',
        codeLink: 'https://github.com/veluat/task-manager-app',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'СОЦИАЛЬНАЯ СЕТЬ',
        description: 'Социальная сеть, реализующая добавление и удаление друзей, авторизацию, отправку сообщений и т. д. Проект React с Redux, Axios, TypeScript, React Hook Form',
        bg: {
          backgroundImage: 'url(' + socialImage + ')',
        },
        sprId: 'network',
        demoBtn: 'Демо',
        demoLink: 'https://veluat.github.io/social-network-app',
        codeLink: 'https://github.com/veluat/social-network-app',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'ВЕБ-ТВОРЧЕСТВО',
        description: 'Проект веб-разработки простой и безопасной платформы для покупки и обмена цифрового искусства и NTF. Проект React с TypeScript, Styled Components',
        bg: {
          backgroundImage: 'url(' + artImage + ')',
        },
        sprId: 'creative-art',
        demoBtn: 'Демо',
        demoLink: 'https://veluat.github.io/creative-art-layout',
        codeLink: 'https://github.com/veluat/creative-art-layout',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'ТЕСТ-РЕДАКТОР КОДА',
        description: 'Упрощённый онлайн редактор кода для JavaScript и Python. Возвращает моковые ответы для console.log() и print(). Проект React с Ace Editor, MirageJS, Vite, Sass',
        bg: {
          backgroundImage: 'url(' + codeImage + ')',
        },
        sprId: 'cards',
        demoBtn: 'В разработке',
        demoLink: 'https://test-code-editor-ten.vercel.app',
        codeLink: 'https://github.com/veluat/test-code-editor',
        codeBtn: 'Код'
      },
      {
        id: generateId(),
        title: 'ОБУЧАЮЩИЕ КАРТОЧКИ',
        description: 'Приложение для обучения с помощью карточек для изучения новых тем. Проект React с Redux Toolkit, Axios, TS, React Hook Form, Zod, React Router Dom, Git, Radix UI',
        bg: {
          backgroundImage: 'url(' + cardsImage + ')',
        },
        sprId: 'cards',
        demoBtn: 'Демо',
        demoLink: '#',
        codeLink: '#',
        codeBtn: 'Код'
      },
    ],
    text: 'Мои пет-проекты',
    shadowText: 'Портфолио'
  }
}