import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo.png"
const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav>
                <NavLink className={`${location.pathname === "/" ? "active home" : "home"}`} to="/">
                    <FontAwesomeIcon icon={faHome} size="2x" color="grey" />
                </NavLink>
                <NavLink className={`${location.pathname === "/about" ? "active about" : "about"}`} to="/about">
                    <FontAwesomeIcon icon={faUser} size="2x" color="grey" />
                </NavLink>
                <NavLink className={`${location.pathname==="/projects"?"active projects":"projects"}`} to="/projects">
                    <FontAwesomeIcon icon={faRectangleList} size="2x" color="grey" />
                </NavLink>
                <NavLink className={`${location.pathname==="/contact"?"active contact":"contact"}`} to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" color="grey" />
                </NavLink>
            </nav>

        </div>
    )
};
export default Navbar;