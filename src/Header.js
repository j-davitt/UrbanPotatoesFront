import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";
import Login from './Login';
import Logout from './Logout';
import Profileauth from './Profileauth';



class Header extends React.Component {

  render() {

    return (
      <>
        <Navbar collapseOnSelect className="navbarheader"expand="lg">
          <Navbar.Brand ><Link to="/" onClick={this.props.resetMovies} className="nav-link"><img className="logo" src={require('./assets/logo5.gif')} alt="logo"></img></Link></Navbar.Brand>
          {/* <NavItem><Link to="/" onClick={this.props.resetMovies} className="nav-link"><img className="home-button"src={require('./assets/home.png')} alt=''></img></Link></NavItem> */}
          <NavItem><Link to="/about" className="nav-link"><img className="aboutus-button"src={require('./assets/aboutus.png')} alt=''></img></Link></NavItem>
          <NavItem id='profile'><Link to="/profile" className="nav-link"><img className="profile-button"src={require('./assets/profile1.png')} alt=''></img></Link>
          
          </NavItem>

          <Login />
          <Logout />
          <Profileauth />

        </Navbar>
      </>
    )
  }
}

export default Header;