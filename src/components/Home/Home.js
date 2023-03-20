import React from 'react';
import "./Home.scss";
import sLogo from "./s.png";
import kLogo from "./k.png";
import sImg from "./sImg.png";
import kImg from "./kImg.png";

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
            <div className="desc">
                <h2>{`( Frontend & Backend Developer )`}</h2>
            </div>
            <div className="sImage">
                <img src={sImg} alt="" />
            </div>
            <div className="kImage">
                <img src={kImg} alt="" />
            </div>

        </div>
    )

};

export default Home;