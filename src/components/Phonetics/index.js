import React from "react";
import "./style.css";

const Phonetics = (props) => {
    return (
        <div className="Phonetics">
            <a className="btn" href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Listen
            </a>
            {props.phonetic.text}
        </div>
    )
}

export default Phonetics;