import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

function Movies(movie){

    const posters = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;


    return(
        <div>
            <div className="movieTitle">
            <h1>{movie && movie.Title}</h1>
            </div>
            <div className="movieInfo">
                <img
                width="200"
                alt={`the movie is titled ${movie.Title}`}
                src={posters}
                />
                <p>{movie && movie.Year}</p>
            </div>
            
        </div>
    )
}

export default Movies;