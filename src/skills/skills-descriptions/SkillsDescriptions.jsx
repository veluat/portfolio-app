import React from 'react';
import s from './SkillsDescriptions.module.scss'
import iconSprite from "../../assets/sprite/sprite.svg";
import Fade from "react-reveal/Fade";
import {Icon} from "../../common/components/icon/Icon";

export const SkillsDescriptions = ({title, description, sprId, width, height, viewBox}) => {
    return (
        <Fade cascade={true}>
            <div className={s.servicesWrapper}>
                <div className={s.servicesTitle}>
                <span>
                    <Icon width={width} height={height} viewBox={viewBox} sprId={sprId} fill={'#72E2AEFF'}/>
                </span>
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Fade>
    )
}