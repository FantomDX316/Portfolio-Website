import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss'
import 'animate.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from "./components/Home/Home.js"
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
      <Navbar />
        {/* <Routes>
          <Route exact path = "/" element={<Home/>} />
          <Route exact path = "/about" element={<About/>} />
          <Route exact path = "/contact" element={<Contact/>} />
          <Route exact path = "/projects" element={<Projects/>} />
          
        </Routes> */}
    </>
  );
}

export default App;
