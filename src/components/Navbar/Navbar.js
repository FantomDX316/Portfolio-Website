import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faRectangleList} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
            <ul>
                <li>
                    <a className = "linkedin" target="_blank" href="https://www.linkedin.com/in/saksham-kothari-927568216/">
                        <FontAwesomeIcon size="xl" icon ={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a className = "github" target="_blank" href="https://github.com/FantomDX316">
                        <FontAwesomeIcon size="xl" icon ={faSquareGithub}/>
                    </a>
                </li>
                <li>
                    <a className = "twitter" target="_blank" href="https://twitter.com/sakshamyash">
                        <FontAwesomeIcon size="xl" icon ={faTwitter}/>
                    </a>
                </li>
                <li>
                    <a className = "instagram" target="_blank" href="https://www.instagram.com/sakshamyash/?next=%2F">
                        <FontAwesomeIcon size="xl" icon ={faInstagram}/>
                    </a>
                </li>
            </ul>

        </div>
    )
};
export default Navbar;