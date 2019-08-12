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
                            <div key={teamx.id} className="col-md-3 col-sm-3 img-fluid-img">
                                <img src={teamx.photoUrl} className="img-fluid" alt=""/>
                                <h5>{teamx.fullname}</h5> 
                                <span>{teamx.role}</span>
                            </div>
                        ))} 
                </div>
            </div>
        </div>
    </div>
     
     
    )
  }
}


export default connect(mapStateToProps)(firestoreConnect([{collection:'team'}])(MainTeam));