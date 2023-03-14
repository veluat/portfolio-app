import React from "react";
import s from './Contacts.module.css';
import sc from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sc.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input className={s.input} placeholder={'NAME'}/>
                    <input className={s.input} placeholder={'EMAIL'}/>
                    <textarea className={s.textarea}></textarea>
                </form>
                <a className={s.submit}>SUBMIT</a>
            </div>
        </div>
    );
}
