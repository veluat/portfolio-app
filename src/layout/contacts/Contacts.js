import React, {useContext, useRef} from "react";
import s from './Contacts.module.scss';
import {Title} from "../../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import {Loader} from "../../common/components/loader/loader";
import {ContactsData} from "./contacts-data/ContactsData";
import {Icon} from "../../common/components/icon/Icon";
import emailjs from "@emailjs/browser";
import {LocaleContext} from "../../common/utils/locale-context/LocaleContext";

export const Contacts = () => {
    const {locale} = useContext(LocaleContext);
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
                errors.name = ContactsData[locale].errorsName
            }
            if (!values.email) {
                errors.email = ContactsData[locale].errorsEmail
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = ContactsData[locale].errorsEmailInvalid
            }
            if (!values.subject) {
                errors.subject = ContactsData[locale].errorsSubject
            }
            if (!values.message) {
                errors.message = ContactsData[locale].errorsMessage
            }
            return errors
        },

        onSubmit: values => {
            setLoading(true)
            emailjs.sendForm(emailServiceId, emailTemplateId, formRef.current, emailPublicKey)
                .then(res => {
                    setMyMessages(ContactsData[locale].sendingOK)
                    setError('')
                    formik.resetForm()
                })
                .catch(error => {
                    setError(ContactsData[locale].sendingFAIL)
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
                                        return (
                                            <div className={s.contactBlock}>

                                                <span key={el.id} className={s.icon}>
                                                    <Icon sprId={el.sprId}
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
                                    <label htmlFor='name'>{ContactsData[locale].labelName}</label>
                                    <input type='text' disabled={loading} className={s.input}
                                           placeholder={ContactsData[locale].placeholderName}
                                           {...formik.getFieldProps('name')}/>
                                    <div className={s.error}>
                                        {formik.touched.name && formik.errors.name && formik.errors.name}
                                    </div>
                                </div>
                                <div className={s.space}>
                                    <label htmlFor='email'>{ContactsData[locale].labelEmail}</label>
                                    <input style={{backgroundColor: '#0F172A7F'}} type='text' disabled={loading}
                                           className={s.input}
                                           placeholder={ContactsData[locale].placeholderEmail}
                                           {...formik.getFieldProps('email')}/>
                                    <div className={s.error}>
                                        {formik.touched.email && formik.errors.email && formik.errors.email}
                                    </div>
                                </div>
                                <div className={s.space}>
                                    <label htmlFor='subject'>{ContactsData[locale].labelSubject}</label>
                                    <input type='text' disabled={loading} className={s.input}
                                           placeholder={ContactsData[locale].placeholderSubject}
                                           {...formik.getFieldProps('subject')}/>
                                    <div className={s.error}>
                                        {formik.touched.subject && formik.errors.subject && formik.errors.subject}
                                    </div>
                                </div>
                                <div className={s.space}>
                                    <label htmlFor='message'>{ContactsData[locale].labelMessage}</label>
                                    <textarea className={s.textarea} disabled={loading}
                                              placeholder={ContactsData[locale].labelMessage}
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
                                            <span>{ContactsData[locale].sending}</span></button>
                                }
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>

        </section>
    )
}
