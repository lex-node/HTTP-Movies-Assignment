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
            Title: <input type="text" name="title" value={props.movie.title} onChange={handleChange}/>
            Director: <input type="text" name="director" value={props.movie.director} onChange={handleChange}/>
            Metascore: <input type="text" name="metascore" value={props.movie.metascore} onChange={handleChange}/>
            {props.movie.stars.map(star => {
                return (
                    <div>
                        Star {props.movie.stars.indexOf(star)}:
                    <input type="text"
                           id={props.movie.stars.indexOf(star)}
                           value={star}
                           onChange={handleChange}/>
                           </div>
                )
            })}
            <button>Submit Changes</button>
        </form>
    )
}

export default MovieUpdater;