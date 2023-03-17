import React from 'react';
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from "react-router-dom";
import logo from "./logo.png"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav>
                <NavLink to="/">
                    <FontAwesomeIcon icon = {faHome} size="2x" color="grey"/>
                </NavLink>
                <NavLink to="/about">
                    <FontAwesomeIcon icon = {faAddressCard } size="2x" color="grey"/>
                </NavLink>
                <NavLink to="/contact">
                    <FontAwesomeIcon icon = {faEnvelope} size="2x" color="grey"/>
                </NavLink>
            </nav>

        </div>
    )
};
export default Navbar;