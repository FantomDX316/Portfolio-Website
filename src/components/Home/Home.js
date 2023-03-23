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
                <div className="textZone">
                    <h1>
                        Hi,<br />
                        <div className="name">
                            I'm <img className="sText" src={sTextLogo} alt="sText" /> aksham <img className="kText" src={kTextLogo} alt="kText" /> othari <br />
                        </div>

                    </h1>
                    <h2>(Frontend & Backend Developer)</h2>
                </div>
            </div>
        </>
    )

};

export default Home;