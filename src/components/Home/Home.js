import React from 'react';
import "./Home.scss";
import sLogo from "./s.png";
import kLogo from "./k.png";

const Home = () => {
    return (
        <div className="homeComponent">
            <div className="iam">

                <h1>I'm</h1><br />
            </div>
            <div className="firstName">
                <img className="sLogo" src={sLogo} alt="S" />
                <h1>aksham</h1><br />
            </div>
            <div className="lastName">
                <img className="kLogo" src={kLogo} alt="K" />
                <h1>othari</h1>
            </div>

        </div>
    )

};

export default Home;