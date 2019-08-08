import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';

class ContactPage extends Component {
  render() {
    return (
      <div>
      <section className="section-about-page">
              <div className="container">   
                  <h3>Contact Us</h3>
                  <p>We always deliver and bring some of the best scientists, entrepreneurs, professionals, innovators and reformers to share ideas that would spark deep discussions and birth new ideas that will change our society.</p>
              </div>
          </section>
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
                  <div className="card-body">
                    <h3 className="text-center">Registration Link</h3>
                    <center>
                        <a className="readmore3" target="_blank" rel="noopener noreferrer" href="http://bit.ly/TEDxAbiaPolyReg">Register</a>
                    </center>
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