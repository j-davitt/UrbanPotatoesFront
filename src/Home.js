import React from 'react';
import Movies from './Movies';
import PopularMovies from './PopularMovies';
import './Home.css'

// import 'reactjs-popup/dist/index.css';
// import Popup from 'reactjs-popup';




class Home extends React.Component {




  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getMovieData();
    this.props.history.push('/search/');
  }

  render() {



    return (
      <>
        <form className="search-field" onSubmit={this.props.getMovieData}>
          <label htmlFor=''>
            <input className="search-box" type='text' placeholder='Search Title...' onInput={this.props.handleInput} />
            {/* <button className="search-button" type='submit'>Search</button> */}
          </label>
        </form>
        <div className='title'>
          {/* <Popup trigger={<button> Trigger</button>} position="right center">
            <h2>Search Your Favorite Movie Listing and See What the Community is saying all about it over the latest critics</h2>
          </Popup> */}

        </div>
        {/* <MovieReviews
          reviews={this.props.reviews} /> */}

        
        <Movies
          movieData={this.props.movieData}
          handleSelectedMovie={this.props.handleSelectedMovie}
          handleUserFavorite={this.props.handleUserFavorite}
          handleUserWatched={this.props.handleUserWatched}
          handleUserWatchlist={this.props.handleUserWatchlist}
        />
       
        <PopularMovies
          popularMovies={this.props.popularMovies}
          handleSelectedMovie={this.props.handleSelectedMovie}
        />
         


      </>
    )
  }
}

export default Home;