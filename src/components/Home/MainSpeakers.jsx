import React, { Component } from 'react';
import Slider from './Slider';
import Roll from 'react-reveal/Roll';



 class MainSpeakers extends Component {
  render() {
    return (
    <div>
      <section className="section-2">
          <div className="container">
            <Roll left cascade>
              <div>
                  <h1 className="speakers_h1">Speakers</h1>
                  <p className="speakers_p">Have a peek view of our speakers</p>
              </div>
            </Roll>
          </div>
            <Slider/>
        </section>
    </div>
    )
  }
}

export default MainSpeakers;