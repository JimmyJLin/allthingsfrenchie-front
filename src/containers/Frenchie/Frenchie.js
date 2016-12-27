import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { IndexLink } from 'react-router';
import {load} from 'redux/modules/frenchie';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

@connect(
    state => ({frenchie: state.frenchie.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Frenchie extends Component {
  static propTypes = {
    frenchie: PropTypes.array,
    load: PropTypes.func.isRequired
  }

  render() {
    const styles = require('./Frenchie.scss');

    const {frenchie} = this.props;
    const productData = frenchie;
    let products;
    if (productData === null || productData.length === 0 || typeof productData === 'undefined') {
      products = <h3>No Proucts loaded</h3>;
    } else {
      products = productData.map((product) => {
        const productDetails = {
          Id: product.product_id,
          Name: product.product_name,
          Category: product.product_category,
          Descriptions: product.product_descriptions,
          Bullets: product.product_key_bullets,
          Price: product.product_price,
          Thumbnail: product.product_img_thumbnail,
          Full_img: product.product_img_full,
          ColorName: product.color_name,
          Size: [product.xxsmall, product.xsmall, product.small, product.medium, product.large, product.xlarge, product.xxlarge]
        };
        // let bullets;
        // const bulletsData = product.product_key_bullets;
        // bullets = bulletsData.map((bullet) => {
        //   console.log('bullet', bullet);
        //   bullets = <div><ul><li>{bullet}</li></ul></div>;
        // });
        // const sizeData = [
        //   {xxsmall: product.xxsmall},
        //   {xsmal: product.xsmall},
        //   {small: product.small},
        //   {medium: product.medium},
        //   {large: product.large},
        //   {xlarge: product.xlarge},
        //   {xxlarge: product.xxlarge},
        // ];
        return (
          <IndexLink to={'frenchie/' + productDetails.Name} className={styles.product} key={productDetails.Id} data={productDetails}>
            <Col xs={12} sm={6} md={4} >
              <Thumbnail className={styles.thumbnail} src={productDetails.Thumbnail} alt={productDetails.Name} >
                <br/>
                <span>
                  {productDetails.Name}
                </span>
                <br/>
                <span>
                  ${productDetails.Price}
                </span>
                <br/>
                <br/>
                <div className={styles.productSnapshot}>
                  <br/>
                  <p>Quick Shop</p>
                </div>
              </Thumbnail>
            </Col>
          </IndexLink>
        );
      });
    }
    return (
      <div className={styles.frenchie}>
        <Helmet title="Frenchie's Closet"/>
        <div className="container">
          <h1>Frenchie's Closet Content Goes Here!</h1>
          <Helmet title="Frenchie's Closet"/>
          <Grid className="container-fluid">
            <Row className="show-grid">
                {products}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
