import React, { Component } from 'react';
import MainTeam from './MainTeam';
import Roll from 'react-reveal/Roll';



 class TeamText extends Component {
  render() {
    return (
    <div>
      <section className="section-4">
          <div className="container">
            <Roll left cascade>
              <div>
                  <h1 className="speakers_h1">Team</h1>
              </div>
            </Roll>
          </div>
            <MainTeam/>
        </section>
    </div>
    )
  }
}

export default TeamText;