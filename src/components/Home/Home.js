import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters.js";
import sText from "./s.png";
import kText from "./k.png";
import kImage from "./kImg.png";
import sImage from "./sImg.png";

import "./Home.scss"

const hi = ["H", "i", ","];
const im = ['I', '\'', 'm'];
const firstName = ['a', 'k', 's', 'h', 'a', 'm'];
const lastName = ['o', 't', 'h', 'a', 'r', 'i'];
const dev = ['(', 'F', 'r', 'o', 'n', 't', 'e', 'n', 'd', '  ', '&', ' ', 'B', 'a', 'c', 'k', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ')'];

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="homeComponent">
                    <h1>
                        <AnimatedLetters strArray={hi} animatedLetterClass="jelloLetter" /><br />
                        <div className="name">
                            <AnimatedLetters strArray={im} animatedLetterClass="jelloLetter" />
                            <img src={sText} alt="sText" /><AnimatedLetters strArray={firstName} animatedLetterClass="jelloLetter" />
                            <img src={kText} alt="kText" /><AnimatedLetters strArray={lastName} animatedLetterClass="jelloLetter" />
                        </div>

                    </h1>
                    <h2>
                        <AnimatedLetters strArray={dev} animatedLetterClass="jelloLetter" />
                    </h2>
                    <Link className="contactMe" to="./contact">CONTACT ME</Link>
                    <div className="lightBulb">
                        <FontAwesomeIcon icon={faLightbulb} size="10x" />
                    </div>
                    <div className="images">
                        <img className="sImg" src={sImage} alt="sImage" />
                        <img className="kImg" src={kImage} alt="kImage" />

                    </div>
                </div>
            </>
        );
    }
};

export default Home;

