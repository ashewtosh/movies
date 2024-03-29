const express = require('express');
const app = express()
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const movieResolvers = require('./resolvers/resolvers');
const movieSchema = require('./schema/schema');
const cors = require('cors');



mongoose.connect("mongodb+srv://ashutoshpanda77:movieMakerApp@movie-maker-app.trtdszw.mongodb.net/?retryWrites=true&w=majority", {
    useNewURLParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected!");
}).catch((err) => {
    console.log("Error: ", err);
})

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    rootValue: movieResolvers,
    graphiql: true
}))

app.get('/hi', (req, res) => {
    res.send("Hello from the express server!!!");
})

app.listen('4000', () => {
    console.log("Server is running on port 4000!");
})