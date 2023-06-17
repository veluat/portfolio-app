import React from "react";
import s from './Skills.module.scss';
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
import materialUI from './../assets/images/materialui.svg'
import unitTest from './../assets/images/unit.png'
import restAPI from './../assets/images/restAPI.svg'
import formik from './../assets/images/formik.png'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <Title text={'My Skills'} shadowText={'WHAT I KNOW'}/>
                <div className={s.skillsContainer}>
                    <div className={s.skills}>
                        <div className={s.skillGrid}>
                            <Skill title={'JavaScript'} src={javascript} alt={"JS"}
                                   description={'80%'} style={{width: '80%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'TypeScript'} src={ts} alt={"TS"}
                                   description={'95%'} style={{width: '95%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'React'} src={react} alt={"React"}
                                   description={'85%'} style={{width: '85%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'Redux'} src={redux} alt={"Redux"}
                                   description={'75%'} style={{width: '75%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'Unit Test'} src={unitTest} alt={"Unit test"}
                                   description={'80%'} style={{width: '80%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'RestApi'} src={restAPI} alt={"RestApi"}
                                   description={'75%'} style={{width: '75%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'Storybook'} src={storybook} alt={"Storybook"}
                                   description={'80%'} style={{width: '80%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'Git'} src={git} alt={"Git"}
                                   description={'85%'} style={{width: '85%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'Formik'} src={formik} alt={"Formik"}
                                   description={'75%'} style={{width: '75%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'SASS'} src={sass} alt={"SASS"}
                                   description={'80%'} style={{width: '80%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'HTML5/ CSS'} src={html5} alt={"HTML/CSS"}
                                   description={'90%'} style={{width: '90%'}}/>
                        </div>
                        <div className={s.skillGrid}>
                            <Skill title={'MaterialUI'} src={materialUI} alt={"MaterialUI"}
                                   description={'75%'} style={{width: '75%'}}/>
                        </div>
                    </div>
                </div>
        </div>
    );
}
