import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.scss";
import logo from "./logo.png"

const Navbar = () => {
    const location = useLocation();
    return (

        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <NavLink className={location.pathname === "/" ? "active home" : "home"} to="/">
                        <FontAwesomeIcon icon={faHome} size="2x" color="grey" />
                    </NavLink>
                    <NavLink className={`${location.pathname === "/about" ? "active about" : "about"}`} to="/about">
                        <FontAwesomeIcon icon={faUser} size="2x" color="grey" />
                    </NavLink>
                    <NavLink className={`${location.pathname === "/projects" ? "active projects" : "projects"}`} to="/projects">
                        <FontAwesomeIcon icon={faRectangleList} size="2x" color="grey" />
                    </NavLink>
                    <NavLink className={`${location.pathname === "/contact" ? "active contact" : "contact"}`} to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color="grey" />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon size="xl" icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon size="xl" icon={faSquareGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon size="xl" icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon size="xl" icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;