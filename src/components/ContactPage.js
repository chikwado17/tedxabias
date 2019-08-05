import React, { Component } from 'react';
import Carosel from './Home/Carosel';
import Footer from '../components/Footer/Footer';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Carosel title={'Contact Us'}/>
        <div className="container">
          <div className="NavLink_h1">
              <h1><span style={{color:'red'}}></span></h1>
              <div className="card">
                  <div className="card-body">
                    <h3 className="text-center">Our social media handles</h3>
                    <p className="text-center">@tedxabiastatepoly - Instagram</p>
                    <p className="text-center">@tedxabiapoly - Twitter</p>
                    <p className="text-center">@tedxabiastatepoly- Facebook</p>
                  </div>
                  <div className="card-body">
                    <h3 className="text-center">Email Address</h3>
                    <p className="text-center">tedxabiastatepoly@gmail.com</p>
                  </div>
                </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default ContactPage;