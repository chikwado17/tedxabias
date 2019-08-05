import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import tedx1 from '../../assets/images/tedx3.jpg';
import Rotate from 'react-reveal/Zoom';




class Carosel extends Component {
  render() {

        const content = [
            {
                title: this.props.title,
                description:
                'TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.',
                image: [tedx1]
                
            },
        ];
    return (
      <div>
      <Slider className="slider-wrapper clipPath">
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
                </Rotate>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Carosel;
