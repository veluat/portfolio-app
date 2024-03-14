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
import restAPI from './../assets/images/restAPI.png'
import formik from './../assets/images/formik.png'
import postman from './../assets/images/postman.svg'
import scc3 from './../assets/images/css3.svg'
import antDesign from './../assets/images/ant-design.svg'
import nodeJS from './../assets/images/node.svg'
import jest from './../assets/images/jest.svg'
import axios from './../assets/images/axios.png'
import radixUI from './../assets/images/radix-ui.png'
import pixel from './../assets/images/perfect-pixel.png'
import styledComponents from './../assets/images/styled.png'
import reactHookForm from './../assets/images/react-hook-form.png'

export const Skills = () => {

    return (
        <section id="skills" className={s.skillsBlock}>
            <Title text={'My Skills'} shadowText={'WHAT I KNOW'}/>
            <div className={s.skillsContainer}>
                <div className={s.skills}>
                    <div className={s.skillGrid}>
                        <Skill title={'JavaScript'} src={javascript} alt={"JS"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'TypeScript'} src={ts} alt={"TS"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'React'} src={react} alt={"React"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Redux'} src={redux} alt={"Redux"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Node.js'} src={nodeJS} alt={"Node.js"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Jest'} src={jest} alt={"Jest"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Unit Test'} src={unitTest} alt={"Unit test"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Storybook'} src={storybook} alt={"Storybook"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Postman'} src={postman} alt={"Postman"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Axios'} src={axios} alt={"Axios"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'RestApi'} src={restAPI} alt={"RestApi"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Git'} src={git} alt={"Git"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Formik'} src={formik} alt={"Formik"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Hook Form'} src={reactHookForm} alt={"React-Hook-Form"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'MaterialUI'} src={materialUI} alt={"MaterialUI"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Ant Design'} src={antDesign} alt={"Ant Design"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Styled </>'} src={styledComponents} alt={"Styled Components"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Radix UI'} src={radixUI} alt={"Radix UI"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'HTML'} src={html5} alt={"HTML"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'CSS3'} src={scc3} alt={"CSS3"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'SASS'} src={sass} alt={"SASS"}/>
                    </div>
                    <div className={s.skillGrid}>
                        <Skill title={'Pixel Perfect'} src={pixel} alt={"Pixel Perfect"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
