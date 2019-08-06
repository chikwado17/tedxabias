import React, { Component } from 'react';
import MainTeam from './MainTeam';
// import Roll from 'react-reveal/Roll';



 class TeamText extends Component {
  render() {
    return (
      <section className="section-4">
          <div className="container">
              <div className="row">
                  <div className="container">
                  <h1 className="speakers_h1">Team</h1>
                  </div>
                  <div>
                    <MainTeam/>
                  </div>
              </div>
          </div> 
      </section>
    )
  }
}

export default TeamText;