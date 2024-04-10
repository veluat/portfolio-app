import React from 'react';
import iconSprite from "./../../../assets/sprite/sprite.svg";

export const Icon = ({fill, width, height, viewBox, sprId}) => {
    return (
        <svg fill={fill}
             width={width}
             height={height}
             viewBox={viewBox}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${sprId}`}/>
        </svg>
    )
}