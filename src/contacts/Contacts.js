import React, {useRef} from "react";
import s from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import {Loader} from "../common/components/loader/loader";
import {ContactsData} from "./contacts-data/ContactsData";
import {Icon} from "../common/components/icon/Icon";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
    const formRef = useRef(null)
    const [loading, setLoading] = React.useState(false)
    const [myMessages, setMyMessages] = React.useState('')
    const [error, setError] = React.useState('')

    const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

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
            emailjs.sendForm(emailServiceId, emailTemplateId,  formRef.current, emailPublicKey)
                .then(res => {
                    setMyMessages('Thanks for your interest! I will contact you as soon as it possible')
                    setError('')
                    formik.resetForm()
                })
                .catch(error => {
                    setError('Something is wrong while sending the message!')
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    })
    const myMessageClose = () => {
        setError('')
        setMyMessages('')
    }
    return (
        <section id="contacts" className={s.contacts}>
            <Title text='Contacts' shadowText='Contact Me'/>

            <div className={s.container}>
                <div className={s.grid}>
                    <Fade left>
                        <div className={s.contactsContainer}>

                            <div className={s.contactInfo}>
                                <h3>{ContactsData.title}</h3>
                                <p>{ContactsData.description}</p>

                                <span className={s.emptySpan}></span>

                                <div className={s.contactsWrapper}>
                                    {ContactsData.info.map(el => {
                                        return (
                                            <div className={s.contactBlock}>

                                                <span key={el.id} className={s.icon}>
                                                    <Icon sprId={el.sprId}
                                                          fill='#72E2AEFF'
                                                          width='40px'
                                                          viewBox={'0 0 200 200'}
                                                          height='40px'
                                                    />
                                                </span>

                                                <div className={s.contactTitle}>
                                                    <h3>{el.title}</h3>
                                                    <p>{el.value}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className={s.mailContainer}>
                            <form ref={formRef} className={s.form} onSubmit={formik.handleSubmit}>
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
                                    <input style={{backgroundColor: '#0F172A7F'}} type='text' disabled={loading} className={s.input}
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
                                        {error && <div className={s.responseError}>{error}
                                            <div className={s.errorClose} onClick={myMessageClose}>x</div>
                                        </div>}
                                    {myMessages &&
                                        <div className={s.responseSuccess}>{myMessages}
                                            <div className={s.successClose} onClick={myMessageClose}>x</div>
                                        </div>
                                    }
                                    </span>

                                {
                                    loading ? <Loader/> :
                                        <button type='submit' className={s.submitBtn} disabled={loading}>
                                            <span>Send Mail</span></button>
                                }
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>

        </section>
    )
}
