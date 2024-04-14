import { useEffect, useState, useContext } from 'react';
import { LocaleContext } from '../locale-context/LocaleContext';

export const LanguageDetector = () => {
    const { setLocale } = useContext(LocaleContext);
    const [userLocale, setUserLocale] = useState(null);

    useEffect(() => {
        const navigatorLanguage = navigator.language;
        setUserLocale(navigatorLanguage.slice(0, 2));
    }, []);

    useEffect(() => {
        if (userLocale) {
            setLocale(userLocale);
        }
    }, [userLocale, setLocale]);

    return null;
};