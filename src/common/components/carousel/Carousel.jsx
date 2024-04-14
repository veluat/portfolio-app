import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import s from "./Carousel.module.scss"
import './../../styles/slider.css'
import {DirectionBtn} from "../direction-btn/DirectionBtn";

export const Carousel = ({items}) => {
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