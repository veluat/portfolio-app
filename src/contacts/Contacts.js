import React from "react";
import s from './Contacts.module.css';
import sc from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sc.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input type='text' className={s.input} placeholder={'Name'}/>
                    <input type='text' className={s.input} placeholder={'Email'}/>
                    <textarea className={s.textarea} placeholder={'Write message'}></textarea>
                    <button type='submit' className={s.submitBtn}>Send Message</button>

                </form>
            </div>
        </div>
    );
}
