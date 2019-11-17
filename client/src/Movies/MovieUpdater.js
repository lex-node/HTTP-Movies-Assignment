import React, {useState} from "react";
import axios from "axios";

const MovieUpdater = (props) => {

    const [alteredMovie, setAlteredMovie] = useState(props.movie);

    const [newMovieStar, setNewMovieStar] = useState("");

    const handleSubmit = () => {
        console.log("handle submit has been triggered");
        let movieStars = alteredMovie.stars;
        movieStars.push(newMovieStar);
        setAlteredMovie({...alteredMovie, "stars": movieStars});
        /*do an axios post to change the entry in the server via the API */
        axios
            .put(`http://localhost:5000/api/movies/${props.movie.id}`, alteredMovie)
            .then(res => {
                alert("changes have been submitted to the server");
            })
            .catch(err => {
                alert(err);
            })
    }

    const handleChange = (e) => {
        console.log("handle change has been triggered");
        if(e.target.name != "stars") {
            setAlteredMovie({...alteredMovie, [e.target.name]: e.target.value});
        } else {
            setNewMovieStar(e.target.value);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" name="title" value={alteredMovie.title} onChange={handleChange}/>
            Director: <input type="text" name="director" value={alteredMovie.director} onChange={handleChange}/>
            Metascore: <input type="text" name="metascore" value={alteredMovie.metascore} onChange={handleChange}/>
            Add New Star: <input type="text" name="stars" value={newMovieStar} onChange={handleChange}/>
            <button>Submit Changes</button>
        </form>
    )
}

export default MovieUpdater;


/*
discarded code that maps through STARS array and allows editing each star

discarded on basis that existing stars should not need to be edited, but kept in case functionality is needed later

{alteredMovie.stars.map(star => {
                return (
                    <div>
                        Edit Existing Star {alteredMovie.stars.indexOf(star)}:
                        <input type="text"
                               id={alteredMovie.stars.indexOf(star)}
                               name="stars"
                               value={star}
                               onChange={handleChange}/>
                    </div>
                )
            })}
 */