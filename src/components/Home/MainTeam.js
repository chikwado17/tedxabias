import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


// import moment from 'moment';


const mapStateToProps = (state) => ({
    team: state.firestore.ordered.team
});

class MainTeam extends Component {
  render() {
    const { team } = this.props;
    return (
        
        <div>
            <div className="container">
                <div className="how-section1">
                <div className="row">
                        {team && team.map((teamx) => (
                        <div key={teamx.id} className="col-md-3 col-xs-4 img-hover-zoom">
                                <img src={teamx.photoUrl} className="img-fluid" alt=""/>
                                <h5>{teamx.fullname}</h5>
                            <div class="text-justify">
                                <p id="how_section5_p" className="text-muted">{teamx.role}</p>
                            </div>
                        </div>))} 
                    </div>
                </div>
            </div>
        </div>
     
    )
  }
}


export default connect(mapStateToProps)(firestoreConnect([{collection:'team'}])(MainTeam));