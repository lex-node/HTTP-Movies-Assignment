import React from "react";
import axios from "axios";

const MovieUpdater = (props) => {

    const handleSubmit = () => {
        console.log("handle submit has been triggered");
    }

    const handleChange = () => {
        console.log("handle change has been triggered");
    }

    return (
        <form obSubmit={handleSubmit}>
            <input type="text" name="title" value={props.movie.title} onChange={handleChange}/>
            <input type="text" name="director" value={props.movie.director} onChange={handleChange}/>
            <input type="text" name="metascore" value={props.movie.metascore} onChange={handleChange}/>
                {props.movie.stars.map(star => {
                    return (
                        <input type="text"
                           value={star}
                           onChange={handleChange}/>
                    )
                })}
            <button>Submit Changes</button>
        </form>
    )
}

export default MovieUpdater;