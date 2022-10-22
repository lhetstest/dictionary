import React from "react";
import "./style.css";

const Photos = (props) => {
    if (props.photos) {
        return (
            <section className="Photos" >
                <div className="row">
                    {props.photos.map((photo, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <a href={photo.src.original} target="_blank" rel="noreferrer">
                                    <img className="img-fluid" src={photo.src.landscape} alt="word"/>
                                </a>
                            </div>)
                    })}
                </div>
            </section>
        )
    } else {
        return null;
    }
}

export default Photos;