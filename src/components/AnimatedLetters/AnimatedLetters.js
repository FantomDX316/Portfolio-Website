import React from "react";

const AnimatedLetters = ({strArray,animatedLetterClass})=>{
    return(
        <>
        {strArray.map((char,i)=>{
            return <span key={char+i} className={animatedLetterClass}>{char}</span>
        })}
        </>
    );
};

export default AnimatedLetters;