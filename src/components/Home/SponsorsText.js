import React, { Component } from 'react';
import MainSponsors from './MainSponsors';
import Roll from 'react-reveal/Roll';



 class SponsorsText extends Component {
  render() {
    return (
    <div>
      <section className="section-3">
          <div className="container">
            <Roll left cascade>
              <div>
                  <h1 className="speakers_h1">Sponsors</h1>
              </div>
            </Roll>
          </div>
            <MainSponsors/>
        </section>
    </div>
    )
  }
}

export default SponsorsText;