import React from 'react';
import Card from 'react-bootstrap/Card';
import Comments from './Comments/Comments';
import './selectedmovie.css'



class SelectedMovie extends React.Component {

  render() {


    return (
      <>

        <Card className="cards" style={{ width: '45%' }}>
          <Card.Header>{this.props.movieDataFromDB.title}</Card.Header>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.movieDataFromDB.poster}`} />
          <Card.Body>
            <Card.Text>
              {this.props.movieDataFromDB.description}
            </Card.Text>

            {/* <Comments 
            movieDataFromDB={this.props.movieDataFromDB}
            sendUpdateComments={this.props.sendUpdateComments}
            /> */}

          </Card.Body>
        </Card>
        <Comments 
            movieDataFromDB={this.props.movieDataFromDB}
            sendUpdateComments={this.props.sendUpdateComments}
            currentUserId="1"
            />
      </>
    )
  }
}

export default SelectedMovie;