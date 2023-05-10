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
import unitTest from './../assets/images/unit.png'
import restAPI from './../assets/images/restAPI.svg'
import formik from './../assets/images/formik.png'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'} shadowText={'WHAT I KNOW'}/>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} src={javascript} alt={"JS"}
                           description={'80%'} style={{width: '80%'}}/>
                    <Skill title={'TypeScript'} src={ts} alt={"TS"}
                           description={'95%'} style={{width: '95%'}}/>
                    <Skill title={'React'} src={react} alt={"React"}
                           description={'85%'} style={{width: '85%'}}/>
                    <Skill title={'Redux'} src={redux} alt={"Redux"}
                           description={'75%'} style={{width: '75%'}}/>
                    <Skill title={'Unit Test'} src={unitTest} alt={"Unit test"}
                           description={'80%'} style={{width: '80%'}}/>
                    <Skill title={'RestApi'} src={restAPI} alt={"RestApi"}
                           description={'75%'} style={{width: '75%'}}/>
                    <Skill title={'Storybook'} src={storybook} alt={"Storybook"}
                           description={'80%'} style={{width: '80%'}}/>
                    <Skill title={'Git'} src={git} alt={"Git"}
                           description={'85%'} style={{width: '85%'}}/>
                    <Skill title={'Formik'} src={formik} alt={"Formik"}
                           description={'75%'} style={{width: '75%'}}/>
                    <Skill title={'SASS'} src={sass} alt={"SASS"}
                           description={'80%'} style={{width: '80%'}}/>
                    <Skill title={'HTML5/CSS'} src={html5} alt={"HTML/CSS"}
                           description={'90%'} style={{width: '90%'}}/>
                    <Skill title={'MaterialUI'} src={materialui} alt={"MaterialUI"}
                           description={'75%'} style={{width: '75%'}}/>
                </div>
            </div>
        </div>
    );
}
