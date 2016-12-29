import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { IndexLink } from 'react-router';
import {load} from 'redux/modules/products';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

@connect(
    state => ({products: state.products.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Frenchie extends Component {
  static propTypes = {
    products: PropTypes.array,
    load: PropTypes.func.isRequired
  }

  render() {
    const styles = require('./Frenchie.scss');

    const {products} = this.props;
    const frenchieData = products.filter(product => product.product_type === 'frenchie');
    const productData = frenchieData;
    let productsList;
    if (productData === null || productData.length === 0 || typeof productData === 'undefined') {
      productsList = <h3>No Proucts loaded</h3>;
    } else {
      productsList = productData.map((product) => {
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
            <div className={styles.content}>
              <Col xs={18} sm={6} md={4} >
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
            </div>
          </IndexLink>
        );
      });
    }
    return (
      <div className={styles.frenchie}>
        <Helmet title="Frenchie's Closet"/>
          <Grid className="container-fluid">
            <Row className="show-grid">
                {productsList}
            </Row>
          </Grid>
      </div>
    );
  }
}
