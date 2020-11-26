import React from 'react';
import './App.css';

import Header from './shared/Header';
import SearchBox from './search/SearchBox';
import SavedMovies from './savedmovies/SavedMovies';

class App extends React.Component {
<<<<<<< HEAD
state = {
  movies: [],
}
  constructor(props) {
    super(props);
    const movies = JSON.parse(window.localStorage.getItem('saved-movies'));

    if (movies && Array.isArray(movies)) {
      this.setState = {
        movies,
      };
=======
  // state = {
  //   movies: [],
  // }

  constructor(props) {
    super(props)
    const movies = JSON.parse(window.localStorage.getItem('saved-movies'))
    if (movies && Array.isArray(movies)) {
      this.state = {
        movies,
      }
    } else {
      this.state = {
        movies: [],
      }
>>>>>>> upstream/master
    }
  }

  handleAddMovie = (movie) => {
<<<<<<< HEAD
    //debugger
    const movies = this.state.movies;
=======
    const movies = this.state.movies
>>>>>>> upstream/master
    this.setState(
      {
        movies: [...movies, movie],
      },
      () => {
        window.localStorage.setItem(
          'saved-movies',
<<<<<<< HEAD
          JSON.stringify(this.state.movies)
        );
      }
    );
  };
=======
          JSON.stringify(this.state.movies),
        )
      },
    )
  }
>>>>>>> upstream/master

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox onMovieAdd={this.handleAddMovie} />
        <SavedMovies savedMovies={this.state.movies} />
      </div>
    );
  }
}

export default App;
