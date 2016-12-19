import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    const styles = require('./Footer.scss');
    const facebookIcon = require('./images/facebook.png');
    const instagram = require('./images/instagram.png');
    const pinterest = require('./images/pinterest.png');
    return (
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-4">
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
            <div className="col-xs-6 col-sm-4">
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
            <div className="col-xs-6 col-sm-4">
              <p>Follow Us</p>
              <br/>
              <div className={styles.social_media_icons}>
                <a href="#" target="_blank"><img src={facebookIcon} alt="facebook icon"/></a>
                <a href="#" target="_blank"><img src={instagram} alt="instagram icon"/></a>
                <a href="#" target="_blank"><img src={pinterest} alt="pinterest icon"/></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
