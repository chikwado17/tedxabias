import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeStyle: true
    }
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">  
            <div className="container">
              <NavLink to='/' className="navbar-brand"> <img className="navbar-logo" src={logo} alt="logo"/> </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
              </ul>
              <span className="navbar-text">
              <ul className="navbar-nav m-2">
                <li className="nav-item">
                  
                  <NavLink style={{color:'black',fontWeight:'bolder'}} to="/" className="nav-link" >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="activeRoute" activeStyle={{ color: 'red' }} style={{color:'black',fontWeight:'bolder'}} to="/about" className="nav-link" >About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="activeRoute" activeStyle={{ color: 'red' }} style={{color:'black',fontWeight:'bolder'}} to="/speakers" className="nav-link" >Speakers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="activeRoute" activeStyle={{ color: 'red' }} style={{color:'black',fontWeight:'bolder'}} to="/sponsors" className="nav-link" >Sponsors</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="activeRoute" activeStyle={{ color: 'red' }} style={{color:'black',fontWeight:'bolder'}} to="/team" className="nav-link" >Team</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="activeRoute" activeStyle={{ color: 'red' }} style={{color:'black',fontWeight:'bolder'}} to="/contact" className="nav-link" >Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  style={{color:'white',fontWeight:'bolder'}} to="/tickets" className="nav-link ticket" >Tickets </NavLink>
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
