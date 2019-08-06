import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Rotate from 'react-reveal/Zoom'; 
import Footer from '../components/Footer/Footer';
import Carosel from './Home/Carosel';


const mapStateToProps = (state) => ({
  sponsors: state.firestore.ordered.sponsors
});

class Sponsors extends Component {
  render() {
    const { sponsors } = this.props;
    return (
      <div>
      <Carosel title={'Sponsors'}/>
          <div className="container">
              <div className="how-section1">
              <div className="row">
                  <Rotate top left>
                      {sponsors && sponsors.map((sponsor) => (
                      <div key={sponsor.id} className="col-md-3 col-xs-4 img-hover-zoom">
                              <img src={sponsor.logoUrl} className="img-fluid" alt=""/>
                              <h5>{sponsor.fullname}</h5>
                          <div className="text-justify">
                              <p id="how_section5_p" className="text-muted">{sponsor.role}</p>
                          </div>
                      </div>))} 
                    </Rotate>
                  </div>
              </div>
          </div>
            <Footer/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(firestoreConnect([{collection:'sponsors'}])(Sponsors));
