import React from "react";

const Phonetics = (props) => {
    return (
        <div >
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Listen
            </a><br />
            {props.phonetic.text}
        </div>
    )
}

export default Phonetics;