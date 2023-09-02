import React from "react";
import s from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import address from "../assets/images/address.png";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import {useFormik} from "formik";
import {Loader} from "../common/components/loader/loader";

export const Contacts = () => {

    const [loading, setLoading] = React.useState(false)
    const [myMessages, setMyMessages] = React.useState('')
    const [error, setError] = React.useState('')

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = 'Name is required'
            }
            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.subject) {
                errors.subject = 'Subject is required'
            }
            if (!values.message) {
                errors.message = 'Message is required'
            }
            return errors
        },
        onSubmit: values => {
            setLoading(true)
            axios.post('https://taupe-halva-4ef5ed.netlify.app/.netlify/functions/api/sendMessage', values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    setMyMessages('Thanks for your interest! I will contact you as soon as it possible')
                    setError('')
                    formik.resetForm();
                })
                .catch(error => {
                    setError('Something is wrong while sending the message!')
                })
                .finally(() => {
                    setLoading(false)
                })
        },
    })

    return (
        <div id="contacts" className={s.contacts}>
            <Title text={'Contacts'} shadowText={'Contact Me'}/>
            <Fade bottom>
                <div className={s.container}>
                    <div className={s.grid}>
                        <div className={s.contactsContainer}>
                            <div className={s.contactInfo}>
                                <h3>Contact Information</h3>
                                <p>I am based in Minsk, Belarus.
                                    You can leave your questions and suggestions.
                                    I will gladly review them.
                                </p>
                                <span className={s.emptySpan}>
                        </span>
                                <div className={s.contactBlocks}>
                                    <div className={s.contactBlock}>
                                <span className={s.icon}>
                                    <img className={s.svg} src={phone} alt={''}></img>
                                </span>
                                        <div className={s.contactTitle}>
                                            <h3>Contact by phone</h3>
                                            <p>+375 (29) 397-95-60</p>
                                        </div>
                                    </div>
                                    <div className={s.contactBlock}>
                                <span className={s.icon}>
                                    <img className={s.svg} src={email} alt={''}></img>
                                </span>
                                        <div className={s.contactTitle}>
                                            <h3>Contact by email</h3>
                                            <p>j.popova.dev@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className={s.contactBlock}>
                                <span className={s.icon}>
                                    <img className={s.svg} src={address} alt={''}></img>
                                </span>
                                        <div className={s.contactTitle}>
                                            <h3>My location</h3>
                                            <p>Minsk, Belarus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.mailContainer}>
                            <form className={s.form} onSubmit={formik.handleSubmit}>
                                <div className={s.space}>
                                    <label htmlFor={"name"}>Name</label>
                                    <input type='text' disabled={loading} className={s.input}
                                           placeholder={'Enter your name...'}
                                           {...formik.getFieldProps('name')}/>
                                    <div className={s.error}>
                                        {formik.touched.name && formik.errors.name && formik.errors.name}
                                    </div>
                                </div>
                                <div className={s.space}>
                                    <label htmlFor={"email"}>Email</label>
                                    <input type='text' disabled={loading} className={s.input}
                                           placeholder={'Enter your email...'}
                                           {...formik.getFieldProps('email')}/>
                                    <div className={s.error}>
                                        {formik.touched.email && formik.errors.email && formik.errors.email}
                                    </div>
                                </div>
                                <div className={s.space}>
                                    <label htmlFor={"subject"}>Subject</label>
                                    <input type='text' disabled={loading} className={s.input}
                                           placeholder={'Enter subject...'}
                                           {...formik.getFieldProps('subject')}/>
                                    <div className={s.error}>
                                        {formik.touched.subject && formik.errors.subject && formik.errors.subject}
                                    </div>
                                </div>
                                <div className={s.space}>
                                    <label htmlFor={"message"}>Message</label>
                                    <textarea className={s.textarea} disabled={loading}
                                              placeholder={'Enter your message...'}
                                              {...formik.getFieldProps('message')}></textarea>
                                    <div className={s.error}>
                                        {formik.touched.message && formik.errors.message && formik.errors.message}
                                    </div>
                                </div>
                                <span>
                                        {error && <div className={s.responseError}>{error}</div>}
                                    {myMessages && <div className={s.responseSuccess}>{myMessages}</div>}
                                    </span>

                                {
                                    loading ? <Loader/> :
                                        <button type='submit' className={s.submitBtn} disabled={loading}>
                                            <span>Send Mail</span></button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
