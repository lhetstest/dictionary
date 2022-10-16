import React, {useState} from "react";
import "./Dictionary.css";

const Dictionary = () => {
    let [keyword, setKeyword] = useState("")
    const search = (e) => {
        e.preventDefault();
        alert(`Searching for ${keyword} definition...`);
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
        </div>
    )
}

export default Dictionary;