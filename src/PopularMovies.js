import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './PopularMovies.css'


class PopularMovies extends React.Component {

  render() {

    return (
      <div className="movieSliders">
        <Carousel className='carousel'>
          {this.props.popularMovies.map(movie => {
            return (
              <Carousel.Item className='carousel.item'>
                <Carousel.Caption className='carousel-caption'>
                  {/* <h3 style={{color: 'white'}}>Popular Movies</h3> */}
                </Carousel.Caption>
                <Link to="/selectedmovie" className="nav-link" onClick={() => { this.props.handleSelectedMovie(movie) }}>
                  <img
                    className="carousel-pictures"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
                    alt="First slide"
                  />
                </Link>
                
              </Carousel.Item>
            )
          }
          )}
        </Carousel>

      </div>
    );
  }
}

export default PopularMovies;