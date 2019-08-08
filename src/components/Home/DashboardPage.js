import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import bg2 from '../../assets/images/bg2.jpg'



import MainContent from './MainContent';
import Rotate from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';


const content = [
	{
		title: 'TEDxAbiaStatePoly 2019',
		description:
		'x=independently Organized TED Event.',
		button: 'Read More',
		image: [bg2]
  }
  

];

class DashboardPage extends Component {
  render() {

    return (
     <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
              <Rotate top left>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link to="/about"><button>{item.button}</button></Link>
                </Rotate>
              </div>
            </div>
          ))}
        </Slider>
            {/* end of carocel */}
        <div className="section-main">
            <MainContent/>
        </div>
     </div>
    )
  }
}

export default DashboardPage;
