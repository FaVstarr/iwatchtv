import React, {useState, useEffect} from "react";
import Header from "./Header";
import Search from "./Search";
import Movies from "./Movies";
import "./App.css";

const API_KEY = "f6f7ba0" 
const MOVIE_API_URL = `http://www.omdbapi.com/?&apikey=${API_KEY}&s={query}`

function App(){

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [searchResults, setSearchResults] = useState([]);

  const search = (query) => {
    fetch(MOVIE_API_URL + search)
    .then((response)=> response.json())
    .then((data) => {
      if (data.Search){
        setSearchResults(data.Search)
        setErrorMessage(null);
       
      }else{
        setSearchResults([]);
        setErrorMessage('No movies found... please try again')
      }
    })
  }

 useEffect(() => {
  


fetch(MOVIE_API_URL)
	.then(response => response.json())
	.then(data => {
    if (data.Search){
      setMovies(data.Search);
      setLoading(false);
    }else{
      setErrorMessage('No movies found');
      setLoading(false);
    }
  })

  .catch((err)=> {
      setErrorMessage('Failed to fetch data from API');
      setLoading(false);
    });
 }, []);

  

  return (
    <div>
      <Header title="IWatchTV" />
      <Search search={search} />
      <p>This is a movie site built using an API from RapidAPI giving you limited movie selections</p>
      <div className="movies">
     
     {loading && !errorMessage ? (
      <span>Loading...</span>
     ): errorMessage ? (
      <div>{errorMessage}</div>
     ) :searchResults && searchResults.length ?  (
      movies.map((movie, index) => (

        // <Movies key={console.log(movie)} />))
        
        <Movies key={`${index}-${movie.Title}`} movie={searchResults} />
        ))
    
     ) : movies && movies.length ? (
      movies.map((movie, index) => (
        <Movies key={`-${movie.Title}`} movie={movie} /> 
      ))
     ) : (

      <span>No movies found</span>     
     
     )}
        
      </div>
    </div>
  )
}

export default App;