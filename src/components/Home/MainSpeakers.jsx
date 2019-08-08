import React, { Component } from 'react';
import Slider from './Slider';




 class MainSpeakers extends Component {
  render() {
    return (
    <div>
      <section className="section-2">
          <div className="container">
          
              <div className="speaker-alignment">
                  <h1 className="speakers_h1">Sp<span style={{color:'#ba160c'}}>eak</span>ers</h1>
                  <p className="speakers_p">Have a peek view of our speakers</p>
              </div>
          
          </div>
            <Slider/>
        </section>
    </div>
    )
  }
}

export default MainSpeakers;