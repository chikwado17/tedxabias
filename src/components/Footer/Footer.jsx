import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <section className="footer_section">
        <div className="container">
           <div className="row">
                <div className="col-md-10">
                    <p>&copy; All Rights Reserved. Copyright TEDxAbiaStatePoly</p>
                </div>
                <div className="col-md-2">
                <Icon name='facebook square' size='big' />
                <Icon name='twitter' size='big' />
                <Icon name='instagram' size='big' />
                </div>
           </div>
        </div>
      </section>
    )
  }
}


export default Footer;