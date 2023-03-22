import React from 'react';
import "./Home.scss";
import sTextLogo from "./s.png";
import kTextLogo from "./k.png";
import sImg from "./sImg.png";
import kImg from "./kImg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';


const Home = () => {
    return (
        <>
            <div className="homeComponent">
                <div className="text-zone">
                    <h1>
                        Hi, <br />
                        <div className="intro">
                            I'm
                            <img className="sText" src={sTextLogo} alt="sText" />
                            aksham
                            <img className="kText" src={kTextLogo} alt="kText" />
                            othari
                        </div>
                    </h1>
                    <h2>(Frontend & Backend Developer)</h2>
                    <div className="images">
                        <FontAwesomeIcon className="bulb" icon={faLightbulb} size="10x"/>
                        <img className="sImg" src={sImg} alt="sImage" />
                        <img className="kImg" src={kImg} alt="kImage" />
                    </div>
                </div>
            </div>
        </>
    )

};

export default Home;