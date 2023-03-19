import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss'
import 'animate.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from "./components/Home/Home.js"
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path = "/" element={<Home/>} />
        </Routes>
    </>
  );
}

export default App;
