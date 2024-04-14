import React, {useContext} from "react";
import s from './Projects.module.scss';
import {Title} from '../../common/components/title/Title';
import {Carousel} from "../../common/components/carousel/Carousel";
import {ProjectData} from "./project-data/ProjectData";
import {Project} from "./project/Project";
import {LocaleContext} from "../../common/utils/locale-context/LocaleContext";

export const Projects = () => {
    const { locale } = useContext(LocaleContext);

    const items = ProjectData[locale].project.map((item) => {
        return (
            <div key={item.id}>
                <Project style={item.bg}
                         projectTitle={item.title}
                         projectDescription={item.description}
                         demoBtn={item.demoBtn}
                         codeBtn={item.codeBtn}
                         demoLink={item.demoLink}
                         codeLink={item.codeLink}/>
            </div>
        )
    })
    return (
        <section id="projects" className={s.projectsBlock}>
            <Title text={ProjectData[locale].text} shadowText={ProjectData[locale].shadowText}/>
            <Carousel items={items}/>
        </section>
    )
}
