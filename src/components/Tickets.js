import React, { Component } from 'react';
import tic from '../assets/images/tic.png';
import Footer from '../components/Footer/Footer';

class Tickets extends Component {
  render() {
    
    return (
      <div>
          <section className="ticket_section" style={{backgroundColor:'#000'}}>
            <div className="container">
              <div className="ticket_section_h2">
                <h2 style={{color:'#fff'}}>TICKETS</h2>
              </div>
              <div className="row">
               <div className="col-md-7">
                 <div className="row">
                    <div className="col-md-4 col-xs-4 img-hover-zoom">
                      <img className="ticket_section_image" src={tic} alt=""/>
                      <div className="ticket_section_text">
                        <h3><br/> Pay for a student </h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://paystack.com/pay/TEDxAbiaStatePolyTickets"> <button type="button" className="btn btn-light btn-lg">Purchase</button> </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-4 img-hover-zoom">
                    <img className="ticket_section_image" src={tic} alt=""/>
                    <div className="ticket_section_text">  
                    <h3><br/> Sponsorship <br/></h3>
                    <a target="_blank" rel="noopener noreferrer" href="https://paystack.com/pay/0o52ctsfg6"> <button type="button" className="btn btn-light btn-lg">Purchase</button> </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-4 img-hover-zoom">
                    <img className="ticket_section_image" src={tic} alt=""/>
                    <div className="ticket_section_text">
                    <h3><br/> Early Bird <br/></h3>
                    <button type="button" className="btn btn-light btn-lg">Purchase</button>
                      </div>
                    </div>
                 </div>
               </div>
               <div className="col-md-5">

               </div>
              </div>
            </div>
          </section>
          <section className="ticket_main">  

          </section>
       <Footer/>
      </div>
    )
  }
}

export default Tickets;