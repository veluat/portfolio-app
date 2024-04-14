import { useEffect, useState, useContext } from 'react';
import { LocaleContext } from '../locale-context/LocaleContext';

export const LanguageHandler = () => {
    const { setLocale } = useContext(LocaleContext)
    const [storedLocale, setStoredLocale] = useState(null)

    useEffect(() => {
        const savedLocale = localStorage.getItem('preferredLocale')
        if (savedLocale) {
            setStoredLocale(savedLocale)
            setLocale(savedLocale)
        }
    }, [setLocale])

    useEffect(() => {
        if (storedLocale) {
            localStorage.setItem('preferredLocale', storedLocale)
        }
    }, [storedLocale])

    return null
}