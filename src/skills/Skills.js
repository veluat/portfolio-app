import React, {useEffect, useMemo, useRef, useState} from "react";
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {SkillsData} from "./skills-data/SkillsData";
import {SkillsFilterBtns} from "./skills-filter-btns/SkillsFilterBtns";
import {SkillsDescriptions} from "./skills-descriptions/SkillsDescriptions";
import {AnimatePresence, motion} from "framer-motion"
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    const [currentFilterType, setCurrentFilterType] = useState('all');
    const [displayedSkills, setDisplayedSkills] = useState(SkillsData.skill);
    const [showMore, setShowMore] = useState(true);
    const skillsPerPage = 3;
    const skillsItemsRef = useRef(null);

    const filteredSkills = useMemo(() => {
        if (currentFilterType === 'stack') {
            return SkillsData.skill.filter(skill => skill.type === 'stack');
        } else if (currentFilterType === 'tools') {
            return SkillsData.skill.filter(skill => skill.type === 'tools');
        } else if (currentFilterType === 'styling') {
            return SkillsData.skill.filter(skill => skill.type === 'styling');
        } else {
            return SkillsData.skill;
        }
    }, [currentFilterType]);

    const totalSkills = filteredSkills.length;

    useEffect(() => {
        const initialSkills = filteredSkills.slice(0, skillsPerPage);
        setDisplayedSkills(initialSkills);
    }, [filteredSkills, skillsPerPage]);

    const handleClickMore = () => {
        const currentlyDisplayed = displayedSkills.length;
        const nextBatchEndIndex = currentlyDisplayed + skillsPerPage;
        const newDisplayedSkills = filteredSkills.slice(0, nextBatchEndIndex);
        setDisplayedSkills(newDisplayedSkills);

        if (nextBatchEndIndex >= totalSkills) {
            setShowMore(false);
        }
    };

    function changeFilterType(type) {
        setCurrentFilterType(type);
        setShowMore(true);
    }

    const handleClickCollapse = () => {
        setDisplayedSkills(filteredSkills.slice(0, skillsPerPage));
        setShowMore(true);
        if (skillsItemsRef.current) {
            skillsItemsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
    };

    return (
        <section id="skills" className={s.skillsBlock}>
            <Title text='My Skills' shadowText='WHAT I KNOW'/>

            <div className={s.skillsDescriptions}>
                {SkillsData.description.map(elem => {
                    return (
                        <SkillsDescriptions key={elem.id}
                                            sprId={elem.sprId}
                                            title={elem.title}
                                            description={elem.description}
                                            width={elem.width}
                                            height={elem.height}
                                            viewBox={elem.viewBox}
                        />
                    )
                })}
                )
            </div>

            <div id="skillsFilterBtns" ref={skillsItemsRef}>
                <SkillsFilterBtns
                    menuItems={SkillsData.skillsFilter}
                    changeFilterType={changeFilterType}
                    active={currentFilterType}
                />
            </div>


            <div className={s.displayedSkillsContainer}>
                <div className={s.displayedSkillsWrap}>
                    <AnimatePresence initial={false}>
                        {displayedSkills.map((skill) => {
                            return (
                                <Fade cascade>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: 1}}
                                        key={skill.id}
                                    >
                                        <Skill title={skill.title}
                                               src={skill.srcPath}
                                               alt={skill.altName}
                                               key={skill.id}
                                        />
                                    </motion.div>
                                </Fade>
                            )
                        })}
                    </AnimatePresence>
                </div>

                <div className={s.centred}>
                    {showMore && displayedSkills.length < totalSkills && (
                        <button onClick={handleClickMore} className={s.moreButton}>
                            Load More
                        </button>
                    )}
                    {displayedSkills.length > 4 && (
                        <button onClick={handleClickCollapse} className={s.moreButton}>
                            Collapse
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}