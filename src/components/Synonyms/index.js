import React from "react";
import "./style.css"

const Synonyms = (props) => {
    if (props.synonyms) {
        return (
            <ul>
                {props.synonyms.map((synonym, index)=> {
                    return <li key={index}>{synonym}</li>
                })}
            </ul>
        )
    } else {
        return null;
    }
}

export default Synonyms;