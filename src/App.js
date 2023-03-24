import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import SelectedMovie from './SelectedMovie';
import axios from 'axios';

// import Login from './Login';
// import Logout from './Logout';
// import Profileauth from './Profileauth';
import { withAuth0 } from "@auth0/auth0-react";
import {createComment } from './api.js'

import SearchResults from './SearchResults';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      movieData: [],
      comments: [],
      user: {},
      userFavorites: [],
      userWatched: [],
      userWatchlist: [],
      nowPlaying: [],
      popularMovies: [],
      movieDataFromDB: [],
      selectedMovie: {},
      reviews:[],
    }

    };

  



  updateComments = async (comment) => {
    console.log(comment);
    let newMovieObject ={...this.state.movieDataFromDB};
    let newComment = await createComment(comment)
    //re assign newcomment.username = this.props.auth0.user.name
    newMovieObject.comment.push(newComment);
    console.log('newcomment',newMovieObject);
    try {
      // let newMovieObject ={...this.state.selectedMovie,comment:[...this.state.selectedMovie.comment,comment] }
      console.log('newmovieObect',newMovieObject)
      let url = `${process.env.REACT_APP_SERVER}/movies/${this.state.movieDataFromDB._id}`
      let updatedMovie = await axios.put(url, newMovieObject)
      this.setState ({
        selectedMovie: updatedMovie.data
      })
    }catch(error){
      console.log(error.message)
    }
  }


  resetMovies = () => {
    this.setState({
      movieData: []
    })
  }

  handleProfile = () => {
    
    this.postUser();
  }

  postUser = async () => {
    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(jwt);
      let userObj = {
        favoritelist: [],
        watchlaterlist: [],
        watchedlist: []
      }
      const config = {
        headers: {"Authorization":`Bearer ${jwt}`},
        method: "post",
        baseURL: process.env.REACT_APP_SERVER,
        url: '/user',
        data: userObj
      }
      try {
        
        let createdUser = await axios(config);
        this.setState({
          user: createdUser.data
        })
  
      } catch (error) {
        console.log(error.message);
  
      }
    }
  }

  handleUserFavorite = async (movie) => {
    const user = {...this.state.user}
    user.favoritelist.push(movie)
    this.setState({
      user: user
    })
    try {
      let url = `${process.env.REACT_APP_SERVER}/user/${user._id}`

      await axios.put(url, user);
    } catch (error) {
      console.log(error.message);
    }
  }

  handleUserWatched = async (movie) => {
    const user = {...this.state.user}
    user.watchedlist.push(movie)
    this.setState({
      user: user
    })
    try {
      let url = `${process.env.REACT_APP_SERVER}/user/${user._id}`

      await axios.put(url, user);
    } catch (error) {
      console.log(error.message);
    }
  }

  handleUserWatchlist = async (movie) => {
    const user = {...this.state.user}
    user.watchlaterlist.push(movie)
    this.setState({
      user: user
    })
    try {
      let url = `${process.env.REACT_APP_SERVER}/user/${user._id}`

      await axios.put(url, user);
    } catch (error) {
      console.log(error.message);
    }
  }

  getMovieData = async (e) => {
    e.preventDefault();
    console.log('got the movies');


    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.movie}`;
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        movieData: movieData.data,
      });


    } catch (error) {
      console.log(error.response);
    }
  };

  getNowPlaying = async () => {
    console.log("got the movies");

    try {
      let url = `${process.env.REACT_APP_SERVER}/getNow`;
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        nowPlaying: movieData.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  getPopularMovies = async () => {
    console.log("got the movies");

    try {
      let url = `${process.env.REACT_APP_SERVER}/getPopular`;
      console.log(url);

      let movieData = await axios.get(url);
      console.log(movieData.data);

      this.setState({
        popularMovies: movieData.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  postMovie = async (movieObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies/${movieObj.movieId}`;
      let createdMovie = await axios.post(url, movieObj);
      this.setState({
        movieDataFromDB: createdMovie.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleSelectedMovie = (movie) => {

    let myMovie = this.postMovie(movie);
    console.log(myMovie);

    this.setState({
      movieDataFromDB: movie
    })

  }

  handleInput = (e) => {
    this.setState({
      movie: e.target.value,
    });
  };

  async componentDidMount() {
    setTimeout(()=>{
      this.handleProfile()
    },1000);
    this.getNowPlaying();
    this.getPopularMovies();
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      
      const jwt = res.__raw;
      
      console.log("token: ", jwt);
      
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/movies",
      };
      
      let movieData = await axios(config);
      
      this.setState({
        movies: movieData.data,
        
      });
    }
  }


  render() {
    console.log(this.state.user)
    return (
      <>
        <div className='menu'>
        <Router>

          <Header
            resetMovies={this.resetMovies}
            handleProfile={this.handleProfile}
          />
          {/* <Login />
          <Logout />
          <Profileauth /> */}

          <Routes>
            <Route
              exact path="/"
              element={<Home 
              getMovieData={this.getMovieData}
              handleInput={this.handleInput}
              handleSelectedMovie={this.handleSelectedMovie}
              movieData={this.state.movieData}
              nowPlaying={this.state.nowPlaying}
              popularMovies={this.state.popularMovies}
              movieDataFromDB={this.state.movieDataFromDB}
              reviews={this.state.reviews}
              handleUserFavorite={this.handleUserFavorite}
              handleUserWatched={this.handleUserWatched}
              handleUserWatchlist={this.handleUserWatchlist}

              />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>
            <Route
              exact path="/profile"
              element={<Profile
                user={this.state.user}
              />}
            >
            </Route>
            <Route
              exact path="/selectedmovie"
              element={<SelectedMovie
                selectedMovie={this.state.selectedMovie}
                movieDataFromDB={this.state.movieDataFromDB}
                sendUpdateComments={this.updateComments}

              />}
            >
            </Route>
            <Route
              exact path="/search"
              element={<SearchResults
                handleSelectedMovie={this.handleSelectedMovie}
                movieData={this.state.movieData}
              />}
            >
            </Route>

          </Routes>
          <Footer />
        </Router>
        </div>
      </>
    );
  }
}


export default withAuth0(App);
