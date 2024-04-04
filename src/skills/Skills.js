import React, {useEffect, useMemo, useState} from "react";
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {SkillsData} from "./skills-data/SkillsData";
import {TabMenu} from "../common/components/tabMenu/TabMenu";
import {SkillsDescriptions} from "./skills-descriptions/SkillsDescriptions";

export const Skills = () => {
    const [currentFilterType, setCurrentFilterType] = useState('all');
    const [displayedSkills, setDisplayedSkills] = useState([]);
    const [showMore, setShowMore] = useState(true);
    const skillsPerPage = 6;

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

    const handleClickLess = () => {
        setDisplayedSkills(filteredSkills.slice(0, skillsPerPage));
        setShowMore(true);
    };

    return (
        <section id="skills" className={s.skillsBlock}>

            <Title text={'My Skills'} shadowText={'WHAT I KNOW'}/>

            <div className={s.descriptions}>
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

            <TabMenu menuItems={SkillsData.skillsFilter}
                     changeFilterType={changeFilterType}
                     active={currentFilterType}
            />

            <div id="skillsItems" className={s.skillsContainer}>
                <div className={s.skillsWrap}>
                    {displayedSkills.map(skill => (
                        <div key={skill.id}>
                            <Skill
                                title={skill.title}
                                src={skill.srcPath}
                                alt={skill.altName}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    {!showMore && displayedSkills.length === totalSkills ?
                        (<div className={s.centred}>
                                <button onClick={handleClickLess} className={s.moreButton}>
                                    Collapse
                                </button>
                            </div>
                        )
                        : (
                            <div className={s.centred}>
                                <button onClick={handleClickMore} className={s.moreButton}>
                                    Load More
                                </button>
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}