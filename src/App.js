import React from "react";
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {RemoteWork} from "./remote-work/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {GoToTop} from "./common/goToTop/GoToTop";

export const App = () => {
    return (
        <>
            <div className="App">
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>
            </div>
            <GoToTop/>
        </>
    )
}

