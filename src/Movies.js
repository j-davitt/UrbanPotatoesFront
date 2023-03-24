import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


class Movies extends React.Component {

  render() {
    console.log(this.props.handleSelectedMovie)
    return (
      <>
        {this.props.movieData.map(movie => {
          return (
            <Card className="moviecards"style={{ width: '18rem' }}>
              <Link to="/selectedmovie" className="nav-link" onClick={() => {this.props.handleSelectedMovie(movie)}}>
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
              </Link>
              <Card.Body>
                <Card.Title>
                  {movie.title}

                </Card.Title>
                <Button variant="outline-light" onClick={() => this.props.handleUserFavorite(movie)}>❤️</Button>
                <Button variant="outline-light" onClick={() => this.props.handleUserWatched(movie)}>✔️</Button>
                <Button variant="outline-light" onClick={() => this.props.handleUserWatchlist(movie)}>➕</Button>

              </Card.Body>
            </Card>
          )
        }
        )}

      </>
    )
  }
}

export default Movies;