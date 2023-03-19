import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom"
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faAddressCard, faEnvelope,faRectangleList } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo.png"
const Navbar = () => {
    const location = useLocation();
    const active = useState("active");
    
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav>
                <NavLink className={`home`} to="/">
                    <FontAwesomeIcon icon = {faHome} size="2x" color="grey"/>
                </NavLink>
                <NavLink className={`about`} to="/about">
                    <FontAwesomeIcon icon = {faAddressCard } size="2x" color="grey"/>
                </NavLink>
                <NavLink className={`projects`} to="/projects">
                    <FontAwesomeIcon icon = {faRectangleList } size="2x" color="grey"/>
                </NavLink>
                <NavLink className={`contact`} to="/contact">
                    <FontAwesomeIcon icon = {faEnvelope} size="2x" color="grey"/>
                </NavLink>
            </nav>

        </div>
    )
};
export default Navbar;