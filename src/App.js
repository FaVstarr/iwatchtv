import React, {useState, useEffect} from "react";
import Header from "./Header";
import Search from "./Search";
import Movies from "./Movies";
import "./App.css";

const API_KEY = "f6f7ba0" 

function App(){

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

 useEffect(() => {
  


fetch(`http://www.omdbapi.com/?s=stranger&apikey=${API_KEY}`)
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
      <Search  />
      <p>This is a movie site built using an API from RapidAPI giving you limited movie selections</p>
      <div className="movies">
     
     {loading && !errorMessage ? (
      <span>Loading...</span>
     ): errorMessage ? (
      <div>{errorMessage}</div>
     ) :movies && movies.length ?  (
      movies.map(movie => (

        // <Movies key={console.log(movie)} />))
        
        <Movies key={movie.imdbID} movie={movie} />))
     ) : (
      <span>No movies found</span>
     
     )}
        
      </div>
    </div>
  )
}

export default App;