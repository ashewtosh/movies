
// const movies = [
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name: "The Shawshank Redemption", genre: "drama", year: "1994" },
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name: "John Wick", genre: "action", year: "2019" },
//     { name: "John Wick", genre: "action", year: "2019" }
// ]

const mongoModel = require('../model/model');

const resolvers = {
    listMovies: () => {
        return mongoModel.find({})
    },
    addMovie: (args) => {
        let newMovieData = new mongoModel({
            name: args.name,
            genre: args.genre,
            year: args.year
        })
        newMovieData.save()
        return newMovieData
    }
};

module.exports = resolvers;