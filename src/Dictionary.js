import React, {useState} from "react";
import Results from './Results';
import axios from "axios";
import "./Dictionary.css";

const Dictionary = () => {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    const handleResponse = (response) => {
        setResults(response.data[0]);
    }
    const search = (e) => {
        e.preventDefault();

        // docs find on Dictionary API https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value)
    }

    return(
        <div className="Dictionary">
            <h1>Dictionary</h1>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} 
                onChange = {handleKeywordChange}
                />
            </form>
            <Results results = {results}/>
        </div>
    )
}

export default Dictionary;