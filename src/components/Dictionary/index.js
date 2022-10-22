import React, {useState} from "react";
import Results from '../Results';
import axios from "axios";
import "./style.css";

const Dictionary = (props) => {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false)

    const handleResponse = (response) => {
        setResults(response.data[0]);
    }
    const search = (e) => {
        // docs find on Dictionary API https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search();
    }

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value)
    }

    const load = () => {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return(
            <div className="Dictionary">
                <h1>Dictionary</h1>
                <section>
                    <form onSubmit={handleSubmit}>
                        <input type="search" autoFocus={true} 
                        onChange = {handleKeywordChange}
                        />
                    </form>
                </section>
                <Results results = {results}/>
            </div>
        )
    } else {
        load();
        return "Loading...";
    }
}

export default Dictionary;