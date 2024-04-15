import React, {useContext} from "react";
import s from './Contacts.module.scss';
import {Title} from "../../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {ContactsData} from "./contacts-data/ContactsData";
import {Icon} from "../../common/components/icon/Icon";
import {LocaleContext} from "../../common/utils/locale-context/LocaleContext";
import {ContactForm} from "./contact-form/ContactForm";

export const Contacts = () => {
    const {locale} = useContext(LocaleContext);

    return (
        <section id='contacts' className={s.contacts}>
            <Title text={ContactsData[locale].text} shadowText={ContactsData[locale].shadowText}/>

            <div className={s.container}>
                <div className={s.grid}>
                    <Fade left>
                        <div className={s.contactsContainer}>
                            <div className={s.contactInfo}>
                                <h3>{ContactsData[locale].title}</h3>
                                <p>{ContactsData[locale].description}</p>
                                <span className={s.emptySpan}></span>

                                <div className={s.contactsWrapper}>
                                    {ContactsData[locale].info.map(el => {
                                        return (<div className={s.contactBlock}>
                                                <span key={el.id} className={s.icon}>
                                                    <Icon
                                                        sprId={el.sprId}
                                                        fill='#72E2AEFF'
                                                        width='40px'
                                                        viewBox='0 0 200 200'
                                                        height='40px'
                                                    />
                                                </span>
                                            <div className={s.contactTitle}>
                                                <h3>{el.title}</h3>
                                                <p>{el.value}</p>
                                            </div>
                                        </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={s.mailContainer}>
                            <ContactForm/>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}