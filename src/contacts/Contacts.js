import React from "react";
import s from './Contacts.module.css';
import sc from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sc.container} ${s.contactsContainer}`}>
                <Title text={'Contact Me'} shadowText={'Contacts'}/>
                <form className={s.form}>
                    <input type='text' className={s.input} placeholder={'Name'}/>
                    <input type='text' className={s.input} placeholder={'Email'}/>
                    <input type='text' className={s.input} placeholder={'Subject'}/>
                    <textarea className={s.textarea} placeholder={'Enter your message...'}></textarea>
                </form>
                <button type='submit' className={s.submitBtn}>
                    <span>Send Mail</span>
                </button>
            </div>
        </div>
    );
}
