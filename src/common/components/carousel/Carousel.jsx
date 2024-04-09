import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Project} from "../../../projects/project/Project";
import s from "./Carousel.module.scss"
import './../../styles/slider.css'
import {ProjectData} from "../../../projects/project-data/ProjectData";
import {DirectionBtn} from "../directionBtn/DirectionBtn";

const items = ProjectData.map((item, index) => {
    return (
        <div key={index}>
            <Project style={item.bg}
                     projectTitle={item.title}
                     projectDescription={item.description}
                     projectButton={item.buttonType}
                     link={item.link}/>
        </div>
    )
})

export const Carousel = () => {
    return (
        <div className={s.slider}>
            <AliceCarousel
                infinite
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={2500}
                animationDuration={1200}
                keyboardNavigation
                renderPrevButton={() => <DirectionBtn id='left'/>}
                renderNextButton={() => <DirectionBtn id='right'/>}
            />
        </div>
    )
}