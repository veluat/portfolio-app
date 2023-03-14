import React from "react";
import './App.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {RemoteWork} from "./remote-work/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

