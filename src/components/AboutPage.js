import React, { Component } from 'react';
import Footer from './Footer/Footer';


class AboutPage extends Component {
  render() {
    return (
      <div>
      <section className="section-about-page">
              <div className="container">   
                  <h3>About Us</h3>
                  <p>We always deliver and bring some of the best scientists, entrepreneurs, professionals, innovators and reformers to share ideas that would spark deep discussions and birth new ideas that will change our society.</p>
              </div>
          </section>
        <div className="container">
            <div className="NavLink_h1">
                <h1><span style={{color:'red'}}>TED</span></h1>
                <div className="card">
                    <div className="card-body">
                      <p className="text-justify">TED is a nonprofit organization devoted to Ideas Worth Spreading. Starting as a four-day conference in California in 1984, TED has grown to support those world-changing ideas with multiple initiatives. The annual TED Conferences invite the world’s leading thinkers and doers to speak about an idea worth sharing. Their talks are then made available for all at TED.com and YouTube.</p>
                      <p className="text-justify">TED speakers have included Bill Gates, Sir Richard Branson, Isabel Allende, Malcom Gladwell, Ngozi Okonjo- Iweala, Jane Goodall, Philippe Starck and Gordon Brown. TED’s media initiatives include TED.com, where new TEDTalks are posted daily, and the Open Translation Project, which provides subtitles and interactive transcripts as well as the ability for any TEDTalk to be translated by volunteers worldwide.</p>
                      <p className="text-justify">TED has established the annual TED Prize, where exceptional individuals with a wish to change the world are given the opportunity to put their wishes into action; TEDx, which offers individuals or groups a way to host local, self-organized events around the world, and the TEDFellows program, helping world-changing innovators from around the globe to become part of the TED community and, with its help, amplify the impact of their remarkable projects and activities.</p>
                      <p className="text-justify">  Visit <a target="_blank" rel="noopener noreferrer" href="https://ted.com">ted.com</a> for more information.</p>
                    </div>
                  </div>
            </div>

            <div className="NavLink_h1">
                <h1><span style={{color:'red'}}>TEDx</span></h1>
                <div className="card">
                    <div className="card-body">
                      <p className="text-justify">TEDx is a program of local, self-organized events that brings people together to share a TED- like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x=independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.</p>
                      <p className="text-justify">TEDx brings the spirit of TED’s mission of ideas worth spreading to local communities around the globe. TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.</p>
                    </div>
                  </div>
            </div>


            <div className="NavLink_h1">
                <h1><span style={{color:'red'}}>TEDx AbiaStatePoly</span></h1>
                <div className="card">
                    <div className="card-body">
                      <p className="text-justify">TEDxAbiaStatePoly is a TEDx event born out of a strong desire to see students from the Polytechnic community lead exceptional lives within and outside school.
Needless to say, Polytechnic students are seen as being inferior to their contemporaries from universities, this affects their self-image, their attitude to study and consequently their contribution to society.</p>
                      <p className="text-justify">For our maiden event, the theme is "THRIVE" which carefully captures this concern.
We hope to create conversations that translate to action in real time.</p>
                    </div>
                  </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default AboutPage;