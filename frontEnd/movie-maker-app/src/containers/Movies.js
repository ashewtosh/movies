import React, { useState, useEffect } from "react";
import SingleMovie from "../components/SingleMovie";
import { GET_MOVIES } from '../graphql/queries';
import { useQuery } from "@apollo/client";

// const movies = [
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name:"The Shawshank Redemption", genre: "drama", year: "1994" },
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name: "John Wick", genre: "action", year: "2019" }
// ]

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const {data, loading, error} = useQuery(GET_MOVIES);
    useEffect(() => {
        if(data && data.listMovies){
            let movies = data.listMovies.map((element) => {
                return {
                    "name": element.name,
                    "genre": element.genre,
                    "year": element.year
                }
            })
            setMovies(movies);
        }
    }, [data]);
    if(loading) return <p className="loading">Loading...</p>;
    if(error) return <p className="error">Error : {error.message}</p>;
    if(data.listMovies.length === 0) return <p className="no-movies">Please Add Some Movies...</p>
    return (
        <div className="movies">
            {movies.map((movie) => {
                return <SingleMovie movieName={movie.name} movieGenre={movie.genre} movieYear={movie.year} />
            })}
        </div>
    );
}

export default Movies;