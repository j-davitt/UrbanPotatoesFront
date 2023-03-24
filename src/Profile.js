import React from 'react';
// import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import "./profile.css";
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Profileauth from './Profileauth';


class Profile extends React.Component {

  render() {

    return (
      <>


        <div className="profile-page-div">
          {/* <Profileauth /> */}
          {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="this is the profile pic" />
            <Card.Body>
              <Card.Title>USERNAME</Card.Title>
              <Card.Text>
                This is my profile
              </Card.Text>
            </Card.Body>
          </Card> */}


          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              {/* <Col sm={4}> */}
              <ListGroup horizontal>
                <ListGroup.Item className="profile-list" action href="#link1">
                  Favorite Movies
                </ListGroup.Item>
                <ListGroup.Item className="profile-list" action href="#link2">
                  Watched Movies
                </ListGroup.Item>
                <ListGroup.Item className="profile-list" action href="#link3">
                  Watch Later
                </ListGroup.Item>
              </ListGroup>
              {/* </Col> */}

              {/* <Col sm={8}> */}
              <Row>
                
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                  <div className="movie-list-pane">
                    {this.props.user.favoritelist.map(movie => {
                      return (

                        <Card style={{ width: '9rem', margin: '10px' }}>
                          <Link to="/selectedmovie" className="nav-link" onClick={() => { this.props.handleSelectedMovie(movie) }}>
                            <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                          </Link>
                          <Card.Body style={{ padding: 5 }}>
                            <Card.Title style={{ fontSize: '10px' }}>
                              {movie.title}

                              {/* <Button variant="outline-light" style={{ fontSize: '10px' }}>❌</Button> */}
                            </Card.Title>


                          </Card.Body>
                        </Card>
                      )
                    })}
                  </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                  <div className="movie-list-pane">
                    {this.props.user.watchedlist.map(movie => {
                      return (
                        <Card style={{ width: '9rem', margin: '10px' }}>
                          <Link to="/selectedmovie" className="nav-link" onClick={() => { this.props.handleSelectedMovie(movie) }}>
                            <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                          </Link>
                          <Card.Body style={{ padding: 5 }}>
                            <Card.Title style={{ fontSize: '10px' }}>
                              {movie.title}

                              {/* <Button variant="outline-light" style={{ fontSize: '10px' }}>❌</Button> */}
                            </Card.Title>


                          </Card.Body>
                        </Card>
                      )
                    })}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                  <div className="movie-list-pane">
                    {this.props.user.watchlaterlist.map(movie => {
                      return (
                        <Card style={{ width: '9rem', margin: '10px' }}>
                          <Link to="/selectedmovie" className="nav-link" onClick={() => { this.props.handleSelectedMovie(movie) }}>
                            <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                          </Link>
                          <Card.Body style={{ padding: 5 }}>
                            <Card.Title style={{ fontSize: '10px' }}>
                              {movie.title}

                              {/* <Button variant="outline-light" style={{ fontSize: '10px' }}>❌</Button> */}
                            </Card.Title>


                          </Card.Body>
                        </Card>
                      )
                    })}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
                
                </Row>
              {/* </Col> */}
            </Row>
          </Tab.Container>
        </div>
      </>
    )
  }
}

export default Profile;