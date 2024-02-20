import React from "react";
import "./App.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';
import AddMovie from './components/AddMovie';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <React.Fragment>
        <Header />
        <Movies />
        <AddMovie />
        <Footer />
      </React.Fragment>
    </ApolloProvider>
  )
}


export default App;