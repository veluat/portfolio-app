import {useContext} from 'react';
import {LocaleContext} from '../locale-context/LocaleContext';
import s from './LanguageSwitcher.module.scss'

export const LanguageSwitcher = () => {
    const { locale, setLocale } = useContext(LocaleContext);

    const handleLanguageChange = (newLocale) => {
        setLocale(newLocale);
    };

    return (
        <div className={s.switcherContainer}>
            <button
                className={`${s.switcherBtn} ${locale === 'en' ? s.active : ''}`}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <button
                className={`${s.switcherBtn} ${locale === 'ru' ? s.active : ''}`}
                onClick={() => handleLanguageChange('ru')}
            >
                RU
            </button>
        </div>
    )
}