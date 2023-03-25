import React,{Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import sText from "./s.png";
import kText from "./k.png";
import kImage from "./kImg.png";
import sImage from "./sImg.png";

import "./Home.scss"

class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <div className="homeComponent">
                <h1>
                    Hi,<br/>
                    <div className="name">
                    I'm 
                    <img src={sText} alt="sText" />aksham
                    <img src={kText} alt="kText" />othari
                    </div>
                    
                </h1>
                <h2>
                    (Frontend & Backend Developer)
                </h2>
                <div className="lightBulb">
                    <FontAwesomeIcon icon ={faLightbulb} size="10x"/>
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

