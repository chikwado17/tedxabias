import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Rotate from 'react-reveal/Zoom';         
import Footer from '../components/Footer/Footer';      
import { SocialIcon } from 'react-social-icons';

const mapStateToProps = (state) => ({
    speakers: state.firestore.ordered.speakers
});


class Speakers extends Component {

    render() { 
            const { speakers } = this.props;
        return ( 
        <div>
        <section className="section-about-page">
              <div className="container">   
                  <h3>TEDxAbiaStatePoly 2019 Speakers</h3>
                  <p>We always deliver and bring some of the best scientists, entrepreneurs, professionals, innovators and reformers to share ideas that would spark deep discussions and birth new ideas that will change our society.</p>
              </div>
          </section>
            <div className="container">
                <div className="how-section1">
                    <div className="row">
                    <Rotate top left>
                        {speakers && speakers.map((speaker) => (
                        <div key={speaker.id} className="col-md-3 img-hover-zoom">
                                <img src={speaker.photoUrl} className="img-fluid" alt=""/>
                                <h5>{speaker.fullname}</h5>
                            <div className="text-justify">
                                <SocialIcon style={{ height: 25, width: 25 }} target="_blank" rel="noopener noreferrer" url={speaker.facebookUrl} />
                                <SocialIcon style={{ height: 25, width: 25 }} target="_blank" rel="noopener noreferrer" url={speaker.twitterUrl} />
                                <p className="text-muted">{speaker.bioData}</p>
                            </div>
                        </div>))} 
                        </Rotate>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
         );
    }
}
 
export default connect(mapStateToProps)(firestoreConnect([{collection:'speakers'}])(Speakers));