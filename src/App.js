import React, {useState, useEffect} from "react";
import Header from "./Header";
import Search from "./Search";
import Movies from "./Movies";
import "./App.css";


function App(){

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7b16a23cadmsh09dce74d34ae29ap1e7cefjsne44ea9114371',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
  fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
    .then(response => response.json())
    .then(data => setMovies(data))
    // .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div>
      <Header title="IWatchTV" />
      <Search  />
      <p>This is a movie site built using an API from OMBD giving you limited movie selections</p>
      <div className="movies">
      
     {movies.map(movie => (
      <Movies key={movie.id} movie={movie} />
     ))}
        
        
      </div>
    </div>
  )
}

export default App;