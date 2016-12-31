import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Footer extends Component {
  render() {
    const styles = require('./Footer.scss');
    const facebookIcon = require('./images/facebook.png');
    const instagram = require('./images/instagram.png');
    const pinterest = require('./images/pinterest.png');
    return (
      <div className={styles.footer}>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <Col xs={12} sm={4}>
              <div className={styles.help}>
                <p>Help</p>
                <br/>
                <ul>
                  <li><a href="#">Order Status</a></li>
                  <li><a href="#">Order Payment</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Returns & Exchanges</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className={styles.emailSignup}>
                <p>Sign Up for Email</p>
                <br/>
                <div id="mc_embed_signup" className="column">
                  <form action="//allthingsfrenchie.us11.list-manage.com/subscribe/post?u=831526dea95e7ba7771161ae8&amp;id=90f2240c60" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="newsletter_container" className="ui equal width grid stackable">
                      <input type="text" name="EMAIL" className="email" placeholder="email address" required />
                      <div className="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="ui button medium" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <p>Follow Us</p>
              <Col xs={10} sm={12} md={8} xsOffset={3} smOffset={2} mdOffset={3}>
                <div className={styles.social_media_icons}>
                  <a href="https://www.facebook.com/allthingsfrenchie.shop/" target="_blank"><img src={facebookIcon} alt="facebook icon"/></a>
                  <a href="https://www.instagram.com/allthingsfrenchie_shop/" target="_blank"><img src={instagram} alt="instagram icon"/></a>
                  <a href="https://www.pinterest.com/frenchie_shop/" target="_blank"><img src={pinterest} alt="pinterest icon"/></a>
                </div>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
