import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Flip from 'react-reveal/Bounce';
import Slide from 'react-reveal/Bounce';
import MainSpeakers from './MainSpeakers';
import MapTedx from './MapTedx';
import SponsorsText from './SponsorsText';
import TeamText from './TeamText';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

class MainContent extends Component {
  render() {
    return (
<div>
    <section className="section-1">
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Flip right cascade>
                    <h1 className="speakers_h1">About TED</h1>
                      <p>TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. TEDx brings the spirit of TED’s mission of ideas worth spreading to local communities around the globe. </p>
                      <p>TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.</p>
                      <div className="readmore">
                        <Link to="/about">Read More</Link>
                      </div>
                  </Flip>
                </div>
                
                <div className="col-md-6">
                  <Slide left>
                    <Iframe url="https://www.youtube.com/embed/d0NHOpeczUU"
                      width="100%"
                      height="350px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                    />  
                  </Slide>
                </div>
              </div>
          </div>
  </section>
        <MainSpeakers/>
        <SponsorsText/>
        <TeamText/>
        <MapTedx/>
        <Footer/>
      
</div>
    )
  }
}


export default MainContent;