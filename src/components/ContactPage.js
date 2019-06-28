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
              <h1><span style={{color:'red'}}>TEDx</span></h1>
              <div className="card">
                  <div className="card-body">
                    <p className="text-justify">TEDx is a program of local, self-organized events that brings people together to share a TED- like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x=independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.</p>
                    <p className="text-justify">TEDx brings the spirit of TED’s mission of ideas worth spreading to local communities around the globe. TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.</p>
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