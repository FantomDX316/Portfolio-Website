import React,{useState} from "react";
import { NavLink , Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressCard, faEnvelope, faRectangleList, faBars ,faXmark} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.scss";
import logo from "./logo.png"

const Navbar = () => {
    
    const [state,setState] = useState({clicked:false});
    const location = useLocation();
    const onClickHandler = ()=>{
        setState({clicked:!state.clicked});
    }
    return (

        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className={state.clicked?"mobileNav":"mobileNavHidden"}>
                    <NavLink className={location.pathname === "/" ? "active home" : "home"} to="/">
                        <FontAwesomeIcon icon={faHome} size="2x" color="grey" />
                    </NavLink>
                    <NavLink className={`${location.pathname === "/about" ? "active about" : "about"}`} to="/about">
                        <FontAwesomeIcon icon={faAddressCard} size="2x" color="grey" />
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
                        <a target="_blank" href="https://www.linkedin.com/in/saksham-kothari-927568216/">
                            <FontAwesomeIcon size="xl" icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/FantomDX316">
                            <FontAwesomeIcon size="xl" icon={faSquareGithub} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/sakshamyash">
                            <FontAwesomeIcon size="xl" icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/sakshamyash/?next=%2F">
                            <FontAwesomeIcon size="xl" icon={faInstagram} />
                        </a>
                    </li>
                </ul>
                <div className="resNav" onClick={onClickHandler}>
                    <FontAwesomeIcon className = {state.clicked?"bars notVisible":"bars "} icon ={faBars} size="3x"/>
                    <FontAwesomeIcon className = {state.clicked?"xmark":"xmark notVisible"} icon ={faXmark} size="3x"/>
                </div>
            </div>
        </>
    );
};

export default Navbar;