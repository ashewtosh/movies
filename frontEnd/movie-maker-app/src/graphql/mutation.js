import { gql } from '@apollo/client';

export const ADD_NEW_MOVIE = gql`
    mutation addNewMovie($name: String!, $genre: String!, $year: String!){
        addMovie(name: $name, genre: $genre, year: $year){
            name,
            genre,
            year
        }
    }
`;