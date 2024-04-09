import React from 'react';
import iconSprite from "../../../assets/sprite/sprite.svg";

export const DirectionBtn = ({id}) => {
    return (
        <svg fill="#000000FF"
             width='50'
             height='50'
             viewBox='0 0 64.000000 64.000000'
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${id}`}/>
        </svg>
    )
}