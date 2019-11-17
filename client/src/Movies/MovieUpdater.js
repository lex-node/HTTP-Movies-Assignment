import React, {useState} from "react";
import axios from "axios";

const MovieUpdater = (props) => {

    const [alteredMovie, setAlteredMovie] = useState(props.movie);

    const handleSubmit = () => {
        console.log("handle submit has been triggered");
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
        setAlteredMovie({...alteredMovie, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" name="title" value={alteredMovie.title} onChange={handleChange}/>
            Director: <input type="text" name="director" value={alteredMovie.director} onChange={handleChange}/>
            Metascore: <input type="text" name="metascore" value={alteredMovie.metascore} onChange={handleChange}/>
            {alteredMovie.stars.map(star => {
                return (
                    <div>
                        Star {alteredMovie.stars.indexOf(star)}:
                        <input type="text"
                               id={alteredMovie.stars.indexOf(star)}
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