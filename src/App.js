import React from "react";
import s from "./App.module.scss"
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Skills} from "./layout/skills/Skills";
import {Projects} from "./layout/projects/Projects";
import {RemoteWork} from "./layout/remote-work/RemoteWork";
import {Contacts} from "./layout/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {GoToTop} from "./common/components/go-to-top/GoToTop";
import {LocaleProvider} from "./common/utils/locale-context/LocaleContext";
import {LanguageSwitcher} from "./common/utils/language-switcher/LanguageSwitcher";
import {LanguageDetector} from "./common/utils/language-detector/LanguageDetector";
import {LanguageHandler} from "./common/utils/language-handler/LanguageHandler";

export const App = () => {
    return (
        <LocaleProvider>
            <LanguageHandler />
            <LanguageDetector/>
            <LanguageSwitcher/>
            <div className={s.app}>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>
            </div>
            <GoToTop/>
        </LocaleProvider>
    )
}

