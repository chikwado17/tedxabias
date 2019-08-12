import React, { Component } from 'react';
import Iframe from 'react-iframe';


import MainSpeakers from './MainSpeakers';
import MapTedx from './MapTedx';
import SponsorsText from './SponsorsText';
import TeamText from './TeamText';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import tedx4 from '../../assets/images/tedx4.jpg';
import tedx6 from '../../assets/images/tedx6.jpg';
import tedx5 from '../../assets/images/tedx5.jpg';
import tedx9 from '../../assets/images/tedx9.jpg';
import tedx7 from '../../assets/images/tedx7.jpg';
import tedx8 from '../../assets/images/tedx8.jpg';








class MainContent extends Component {
  render() {
    return (
<div>
  <section className="about-section">
      <div className="container">
          <div className="row">
            <div className="col-md-4">
                <div className="about-title">
                  <h6>About <span style={{color:'#ba160c'}}>TED</span></h6>
                </div>
                <p>TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics from science to business to global issues in more than 100 languages. TEDx brings the spirit of TED’s mission of ideas worth spreading to local communities around the globe.</p>
            </div>
            <div className="col-md-4">
                  <div className="about-title">
                    <h6>About <span style={{color:'#ba160c'}}>TEDx</span></h6>
                  </div>
                  <p>TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.</p>
              </div>
              <div className="col-md-4">
                  <div className="about-title">
                  <h6>About <span style={{color:'#ba160c'}}>TEDxAbiaStatePoly</span></h6>
                  </div> 
                  <p>TEDxAbiaStatePoly is a TEDx event born out of a strong desire to see students from the Polytechnic community lead exceptional lives within and outside school. Needless to say, Polytechnic students are seen as being inferior to their contemporaries from universities, this affects their self-image, their attitude to study and consequently their contribution to society.</p>  
              </div>
          </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="about-title4">
                  <h6>About <span style={{color:'#ba160c'}}>TEDx2019 Spring!</span> Conference</h6>
                </div>
                <p>TEDxAbiaStatePoly 2019 is happening at the Abia State poly ICT Centre on September 3rd, 2019.TEDxAbiaStatePoly is an annual TEDx conference that aspires to bring together Nigeria’s best scientists, entrepreneurs, professionals, innovators and reformers to share ideas that would spark deep discussions and birth new ideas that will change our society. Last year.</p>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="about-title-btn">
              <div className="readmore">
                      <Link to="/about">Read More</Link>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                <div className="about-title1">
                  <Iframe url="https://www.youtube.com/embed/d0NHOpeczUU"
                        width="100%"
                        height="350px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                      />  
                </div>
              </div>
          </div>
      </div>
      <section className="register-now">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="about-title3">
                    <h2>TEDxAbiaStatePoly 2019</h2>
                    <h2>Saturday September 3rd, 2019<br/>
                    Register Now!</h2>
                </div>
                </div>
            </div>
        </div>
      </section>
   
        <section className="focus-data">
        <div className="container">
          <div className="about-titlee">
              <h1 className="speakers_h1">Our F<span style={{color:'#ba160c'}}>ocu</span>s</h1>
          </div>
        </div>
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                <div className="about-title7">
                <h6><span></span></h6>
                  </div>
                 <div className="img-hover-zoom1">
                    <img className="focus-img " src={tedx4} alt="img"/>
                 </div>


                </div>
                <div className="col-md-4">
                <div className="about-title7">
                <h6><span></span></h6>
                  </div>
                  <div className="img-hover-zoom1">
                    <img className="focus-img " src={tedx8} alt="img"/>
                 </div>


                  </div>
                  <div className="col-md-4">
                  <div className="about-title7">
                  <h6><span></span></h6>
                  </div>
                  <div className="img-hover-zoom1">
                    <img className="focus-img " src={tedx7} alt="img"/>
                 </div>


                  </div>
                </div>
            </div>
        </section>

        <div className="container">
            <div className="row">
            <div className="col-md-4">
            <div className="about-title7">
            <h6><span></span></h6>
                  </div>
                  <div className="img-hover-zoom1">
                    <img className="focus-img " src={tedx9} alt="img"/>
                 </div>


            </div>
            <div className="col-md-4">
            <div className="about-title7">
                    <h6><span></span></h6>
                  </div>
                  <div className="img-hover-zoom1">
                    <img className="focus-img " src={tedx5} alt="img"/>
                 </div>


              </div>
              <div className="col-md-4">
              <div className="about-title7">
                    <h6><span></span></h6>
                  </div>
                  <div className="img-hover-zoom1">
                    <img className="focus-img " src={tedx6} alt="img"/>
                 </div>



              </div>
            </div>
        </div>
  
  </section>
      








       
    <div>
        <MainSpeakers/>
        <SponsorsText/>
        <TeamText/>
        <MapTedx/>
        <Footer/>
    </div> 
</div>
    )
  }
}


export default MainContent;