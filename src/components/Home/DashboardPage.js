import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img8 from '../../assets/images/img8.jpg'

import tedx9 from '../../assets/images/tedx9.jpg'
import tedx8 from '../../assets/images/tedx8.jpg'
import tedx7 from '../../assets/images/tedx7.jpg'
import tedx6 from '../../assets/images/tedx6.jpg'
import tedx5 from '../../assets/images/tedx5.jpg'

import lead from '../../assets/images/lead.jpeg';
import MainContent from './MainContent';
import Rotate from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';


const content = [
	{
		title: 'TED is a nonprofit devoted to spreading ideas',
		description:
		'TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.',
		button: 'Read More',
		image: [tedx7],
		user: 'Adaugo Nwankpa',
		userProfile: [lead]
  },
  {
		title: 'TED is a nonprofit devoted to spreading ideas',
		description:
		'TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.',
		button: 'Read More',
		image: [tedx8],
		user: 'Adaugo Nwankpa',
		userProfile: [lead]
  },
  {
		title: 'TED is a nonprofit devoted to spreading ideas',
		description:
		'TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.',
		button: 'Read More',
		image: [img8],
		user: 'Adaugo Nwankpa',
		userProfile: [lead]
	},
  {
		title: 'TED is a nonprofit devoted to spreading ideas',
		description:
		'TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.',
		button: 'Read More',
		image: [tedx9],
		user: 'Adaugo Nwankpa',
		userProfile: [lead]
	},
	{
		title: 'TED is a nonprofit devoted to spreading ideas',
		description:
		'TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.',
		button: 'Read More',
		image: [tedx6],
		user: 'Adaugo Nwankpa',
		userProfile: [lead]
	},
	{
		title: 'TED is a nonprofit devoted to spreading ideas',
		description:
    'TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.',
    button: 'Read More',
		image: [tedx5],
		user: 'Adaugo Nwankpa',
		userProfile: [lead]
	}
];

class DashboardPage extends Component {
  render() {

    return (
     <div>
        <Slider autoplay={2000} className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
              <Rotate top left>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link to="/about"><button>{item.button}</button></Link>
                </Rotate>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Team Lead <strong>{item.user}</strong>
                </span>
              </section>
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
