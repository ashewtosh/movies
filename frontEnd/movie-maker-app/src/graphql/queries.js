import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
    query {
        listMovies{
            name,
            genre,
            year
        }
    }
`;

