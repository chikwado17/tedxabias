import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">  
            <div className="container">
              <Link to='/' className="navbar-brand"><h3><span style={{color:'red'}}>TEd<sup>x</sup></span>AbiaStatePoly</h3> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
              </ul>
              <span className="navbar-text">
              <ul className="navbar-nav m-2">
                <li className="nav-item">
                  <Link style={{color:'white'}} to="/" className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} to="/about" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} to="/speakers" className="nav-link" >Speakers</Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} to="/sponsors" className="nav-link" >Sponsors</Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} to="/team" className="nav-link" >Team</Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} to="/contact" className="nav-link" >Contact</Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} to="/tickets" className="nav-link ticket" >Tickets </Link>
                </li>
              </ul>
              </span>
            </div>
           
            </div>
          </nav>
    )
  }
}
export default Header;
