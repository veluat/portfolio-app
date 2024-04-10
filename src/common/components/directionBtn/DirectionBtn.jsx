import React from 'react';
import {Icon} from "../icon/Icon";

export const DirectionBtn = ({id, width, height}) => {
    return (
        <Icon sprId={id}
              fill="#000000FF"
              width={width || '50'}
              height={height || '50'}
              viewBox='0 0 64 64'
        />
    )
}