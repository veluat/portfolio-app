import React from 'react';
import s from './TabMenu.module.scss'

export const TabMenu = ({menuItems, changeFilterType, active}) => {
    return (
        <div className={s.TabMenu}>
            {menuItems.map((item, index) => (
                <button className={item.type === active ? `${s.btn} ${s.active}` : s.btn}
                        key={index}
                        onClick={() => changeFilterType(item.type)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    )
}