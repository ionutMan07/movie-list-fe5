import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core';

import styles from '../search/SearchBox.module.css'

const MovieItem = (props) => {
  const movie = props.movie
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <div className = {styles.list}>
    <li className="movie_item">
      <span className="movie_poster">
        <img src={imgUrl} alt={movie.title}/>
      </span>
      <span className="movie_title">{movie.title}</span>
      <span>{movie.release_date}</span>
      <span>{movie.vote_average}</span>
      <span>
        <Button></Button>
      </span>
    </li>
    </div>
  )
}

const SavedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul >
          {props.savedMovies.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </ul>
      ) : (
        'No saved movies'
      )}
    </div>
  )
}

export default SavedMovies
