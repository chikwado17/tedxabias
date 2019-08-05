import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


// import moment from 'moment';


const mapStateToProps = (state) => ({
    sponsors: state.firestore.ordered.sponsors
});

class MainSponsors extends Component {
  render() {
    const { sponsors } = this.props;
    return (
        
        <div>
            <div className="container">
                <div className="how-section3">
                <div className="row">
                        {sponsors && sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="col-md-3 col-sm-3">
                                <img width="200px" src={sponsor.logoUrl} className="" alt=""/>
                                <h4>{sponsor.name}</h4>
                            <div class="text-justify">
                                <p className="text-muted">{sponsor.bioData}</p>
                            </div>
                        </div>))} 
                        
                    </div>
                </div>
                <div className="readmore2">
                    <a style={{textAlign:'center'}} target="_blank" rel="noopener noreferrer" href="https://paystack.com/pay/0o52ctsfg6">Sponsorship</a>
                </div>
            </div>  
        </div>
     
    )
  }
}


export default connect(mapStateToProps)(firestoreConnect([{collection:'sponsors'}])(MainSponsors));