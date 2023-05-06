import React from "react";
import s from './Skills.module.css';
import sc from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'} shadowText={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JavaScript'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Donec molestie velit id libero.'}/>
                    <Skill title={'TypeScript'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'Redux'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero'}/>
                    <Skill title={'Unit Test'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'HTML/CSS'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'RestApi'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id liberoLorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id liberoLorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id liberoDonec molestie velit id libero.'}/>
                    <Skill title={'Storybook'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'Git'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero'}/>
                </div>
            </div>
        </div>
    );
}
