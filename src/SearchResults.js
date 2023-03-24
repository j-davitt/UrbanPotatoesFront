import React from 'react';
import Movies from './Movies';




class SearchResults extends React.Component {

  render() {

    return (
      <>
        <Movies 
        movieData={this.props.movieData} 
        handleSelectedMovie={this.props.handleSelectedMovie}
        />
      </>
    )
  }
}

export default SearchResults;