import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieUpdater = (props) => {
    return (
        <form obSubmit={movieUpdater}>
            <input type="text" name="title", value={props.movie.title} onChange={handleChange}/>
            <input type="text" name="director", value={props.movie.director} onChange={handleChange}/>
            <input type="text" name="metascore", value={props.movie.metascore} onChange={handleChange}/>
                {props.movie.stars.map(star => {
                    <input type="text" name=`star ${movie.stars.indexOf({star})}`, value={props.movie.stars[{movie.stars.indexOf({star})}]}, onChange={handleChange}/>
                })}
            <button>Submit Changes</button>
        </form>
    )
}

export default MovieUpdater;