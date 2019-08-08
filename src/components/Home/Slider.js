import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// import { SocialIcon } from 'react-social-icons';

// import moment from 'moment';


const mapStateToProps = (state) => ({
    speakers: state.firestore.ordered.speakers
});

class Slider extends Component {
  render() {
    const { speakers } = this.props;
    return (
        
        <div>
            <div className="container">
                <div className="how-section1">
                    <div className="row">
                        {speakers && speakers.map((speaker) => (
                        <div key={speaker.id} className="col-md-3 col-sm-3">
                               <div className="img-hover-zoom">
                                    <img src={speaker.photoUrl} className="img-fluid1" alt=""/>
                               </div>
                               <h5 className="speaker-name">{speaker.fullname}</h5>
                            <div className="text-justify">
                            
                                {/* <SocialIcon style={{ height: 25, width: 25 }} target="_blank" rel="noopener noreferrer" url={speaker.facebookUrl} />
                                <SocialIcon style={{ height: 25, width: 25 }} target="_blank" rel="noopener noreferrer" url={speaker.twitterUrl} /> */}
                                <p className="text-muted">{speaker.bioData}</p>
                            </div>
                        </div>))} 
                    </div>
                </div>
            </div>
        </div>
     
    )
  }
}


export default connect(mapStateToProps)(firestoreConnect([{collection:'speakers'}])(Slider));