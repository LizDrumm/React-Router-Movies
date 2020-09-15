import React from 'react';
import { Link} from 'react-router-dom';


//Map movies array and movie dealts for each movie by id
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (      
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {

  const { title, director, metascore, id } = props.movie
  //Link to movies using id//styling from the help channel  
  return (
    <div className="movie-card">
    
      <Link to={`/movies/${id}`}style={{ textDecoration: 'none', color: 'black'}}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
      
    </div>
  )
}