import React from "react";
import Meaning from "../ Meaning";
import Phonetics from "../Phonetics";
import "./style.css"

const Results = (props) => {

    if (props.results) {
    return (
        <div className="Results">
            <section>
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map((phonetic, index) => {
                    return(
                        <div key={index}>
                            <Phonetics phonetic={phonetic} />
                        </div>
                    )
                })}
            </section>
            {props.results.meanings.map((meaning,index) => {
                return (
                <section key={index}>
                    <Meaning meaning={props.results.meanings[0]} /> 
                </section>
                );
            })
            }
        </div>
        )
    } else {
        return null;
    }
    
};

export default Results;