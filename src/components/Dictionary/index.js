import React, {useState} from "react";
import Results from '../Results';
import axios from "axios";
import Photos from "../Photos";
import "./style.css";

const Dictionary = (props) => {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    const handleDictionaryResponse = (response) => {
        setResults(response.data[0]);
    }

    const handlePexelsReseponse = (response) => {
        setPhotos(response.data.photos);
    }

    const search = (e) => {
        // docs find on Dictionary API https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsAPI = "563492ad6f91700001000001aacc415881a048aa9c2f27570af21b2b";
        let pexelsURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        const headers = { Authorization: `Bearer ${pexelsAPI}`}
        axios.get(pexelsURL, { headers: headers}).then(handlePexelsReseponse);
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
                <section>
                    <Photos photos={photos} />
                </section>
                
            </div>
        )
    } else {
        load();
        return "Loading...";
    }
}

export default Dictionary;