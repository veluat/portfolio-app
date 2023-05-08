import React from "react";
import s from './Skills.module.scss';
import sc from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import javascript from './../assets/images/javascript.svg'
import ts from './../assets/images/ts.svg'
import react from './../assets/images/react.svg'
import redux from './../assets/images/redux.svg'
import git from './../assets/images/git.svg'
import html5 from './../assets/images/html5.svg'
import sass from './../assets/images/sass.svg'
import storybook from './../assets/images/storybook.svg'
import materialui from './../assets/images/materialui.svg'
import formik from './../assets/images/formik.svg'
import restAPI from './../assets/images/restAPI.svg'
import unitTest from './../assets/images/unitTest.svg'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'} shadowText={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} src={javascript} alt={"JS"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Donec molestie velit '}/>
                    <Skill title={'TypeScript'} src={ts} alt={"TS"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'React'} src={react} alt={"React"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'Redux'} src={redux} alt={"Redux"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Lorem ipsum dolor '}/>
                    <Skill title={'Unit Test'} src={unitTest} alt={"Unit test"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'RestApi'} src={restAPI} alt={"RestApi"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Lorem ipsum dolor sit amet elit suscipit orci. '}/>
                    <Skill title={'Storybook'} src={storybook} alt={"Storybook"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'Git'} src={git} alt={"Git"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Lorem ipsum dolor '}/>
                    <Skill title={'Formik'} src={formik} alt={"Formik"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Lorem ipsum dolor '}/>
                    <Skill title={'SASS'} src={sass} alt={"SASS"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'HTML5/CSS'} src={html5} alt={"HTML/CSS"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'MaterialUI'} src={materialui} alt={"MaterialUI"}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. Lorem ipsum dolor '}/>
                </div>
            </div>
        </div>
    );
}
