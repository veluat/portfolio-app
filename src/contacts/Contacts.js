import React from "react";
import s from './Contacts.module.scss';
import sc from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import email from "../assets/images/phone.png";

export const Contacts = () => {
    return (
        <div className={`${sc.container} ${s.contacts}`}>
            <Title text={'Contacts'} shadowText={'Contact Me'}/>
            <div className={s.grid}>
                <div className={s.contactsContainer}>
                    <div className={s.contactInfo}>
                        <h3>Contact Information</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, iusto harum possimus
                            non praesentium qui facere.
                        </p>
                        <span className={s.emptySpan}></span>
                        <div className={s.contactBlocks}>
                            <div className={s.contactBlock}>
                                <span className={s.icon}>
                                    <svg className={s.svg}></svg>
                                </span>
                                <div className={s.contactTitle}>
                                    <h3>Contact on phone</h3>
                                    <p>+375(29)123-45-67</p>
                                </div>
                            </div>
                            <div className={s.contactBlock}>
                                <span className={s.icon}>
                                    <svg className={s.svg}></svg>
                                </span>
                                <div className={s.contactTitle}>
                                    <h3>Contact on mail</h3>
                                    <p>julia@demo</p>
                                </div>
                            </div>
                            <div className={s.contactBlock}>
                                <span className={s.icon}>
                                    <svg className={s.svg}></svg>
                                </span>
                                <div className={s.contactTitle}>
                                    <h3>Contact address</h3>
                                    <p>Minsk, Belarus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.mailContainer}>
                    <form className={s.form}>
                        <div className={s.space}>
                            <label htmlFor={"name"}>Name</label>
                            <input type='text' className={s.input} placeholder={'Enter your name...'}/>
                        </div>
                        <div className={s.space}>
                            <label htmlFor={"email"}>Email</label>
                            <input type='text' className={s.input} placeholder={'Enter your email...'}/>
                        </div>
                        <div className={s.space}>
                            <label htmlFor={"subject"}>Subject</label>
                            <input type='text' className={s.input} placeholder={'Enter subject...'}/>
                        </div>
                        <div className={s.space}>
                            <label htmlFor={"message"}>Message</label>
                            <textarea className={s.textarea} placeholder={'Enter your message...'}></textarea>
                        </div>
                        <button type='submit' className={s.submitBtn}>
                            <span>Send Mail</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
