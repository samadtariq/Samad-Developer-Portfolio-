import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Test from './components/Test';
import "./main.js";
import './styles.css';
import Home from './components/Home';
import About from './components/About.js';
import Contacts from './components/Contacts.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import { useState } from 'react';
function App() {


  return (

    <>
      <Contact />
      <main className="main-content">

        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <Test />
    </>
  )
}

export default App;
