import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';


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

                <Menu.Item
                href="https://twitter.com/tedxabiapoly"
                position="right"
                target="_blank"
                >
                <Icon name="twitter" size="big" />
                </Menu.Item>

                <Menu.Item
                href="https://facebook.com/Tedxabiastatepoly-346878065991355"
                position="right"
                target="_blank"
                >
                <Icon name="facebook square" size="big" />
                </Menu.Item>

                <Menu.Item
                href="https://instagram.com/tedxabiastatepoly"
                position="right"
                target="_blank"
                >
                <Icon name="instagram" size="big" />
                </Menu.Item>
                </div>
           </div>
        </div>
      </section>
    )
  }
}


export default Footer;