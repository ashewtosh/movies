import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { ADD_NEW_MOVIE } from '../graphql/mutation';
import { useMutation } from '@apollo/client';
import { GET_MOVIES } from '../graphql/queries';


const AddMovie = () => {
    const [movieName, setMovieName] = useState("");
    const [movieGenre, setMovieGenre] = useState("");
    const [movieYear, setMovieYear] = useState("");

    const submitMovie = (e) =>{
        e.preventDefault();
        newMovieData({
            variables: {
                name: movieName,
                genre: movieGenre,
                year: movieYear
            },
            refetchQueries: [{
                query: GET_MOVIES
            }]
        })
    }

    const [newMovieData, { loading, error }] = useMutation(ADD_NEW_MOVIE);

    if(loading) return <p className="loading">Submitting Your Movie...</p>
    if(error) return <p className="error">Cannot add your movie! : {error.message} </p>
    return (
        <div className="addMovie" id="addNewMovie">
            <form onSubmit={submitMovie}>
                <input type="text" placeholder="Movie Name" onChange={(e) => setMovieName(e.target.value)} required />
                <input type="text" placeholder="Movie Genre" onChange={(e) => setMovieGenre(e.target.value)} required />
                <input type="text" placeholder="Movie Year" onChange={(e) => setMovieYear(e.target.value)} />
                <button>Add Movie</button>
            </form>
            <div className="top">
                <Link smooth to="#header" className="top-button">Back to top</Link>
            </div>
        </div>
    );
}



export default AddMovie;