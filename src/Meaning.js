import React from "react";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
    console.log(props.meaning);
    
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>
                            {definition.definition}
                            <br />
                            <em>{definition.example}</em>
                        </p>
                            <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            })}
        </div>
    );
};

export default Meaning;