import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./footer.css";



class Footer extends React.Component {

  render() {

    return (
      <>
        <Navbar className='navbarfooter' collapseOnSelect expand="lg" >
          <Navbar.Brand>
            <p className='footer-content'>&copy; 2023 Urban Potatoes</p>
          </Navbar.Brand>
        </Navbar>
      
      </>
    );
  }
}

export default Footer;