import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Fade from 'react-reveal/Fade';


class MapTedx extends Component {
  render() {
    return (
      <div>
          <div>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.847189438147!2d7.3609642139105915!3d5.128305439231333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042996f6022862b%3A0xafdadf3c63ae7d6b!2sAbia+State+Polytechnic!5e0!3m2!1sen!2sng!4v1557256333362!5m2!1sen!2sng"
              width="100%"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
          </div>

        <div className="iframe_content">
           <div className="container">
              <Fade left cascade>
                <div>
                  <h1 className="speakers_h1">Factory Rd, Aba</h1>
                  <h4 className="location_font">Abia State Polytechnic Aba</h4>
                  <p>Join us as we listen to African ideas worth spreading in the heart of London</p>
                </div>
              </Fade>
           </div>
        </div>
      </div>
    )
  }
}
export default MapTedx;