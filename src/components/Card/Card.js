import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Carousel from 'react-bootstrap/lib/Carousel';

@reduxForm({
  form: 'addToKart',
  fields: ['quantity']
})
export default class Card extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    product_id: PropTypes.number,
    product_name: PropTypes.string,
    product_price: PropTypes.string,
    product_category: PropTypes.string,
    product_descriptions: PropTypes.string,
    product_key_bullets: PropTypes.array,
    product_img_full: PropTypes.array,
    color_name: PropTypes.array,
    color_quantity: PropTypes.array,
    xxsmall: PropTypes.string,
    xsmall: PropTypes.string,
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    xlarge: PropTypes.string,
    xxlarge: PropTypes.string
  }
  render() {
    const {
      fields: {quantity},
      handleSubmit,
      product_name,
      product_price,
      product_category,
      product_descriptions,
      product_key_bullets,
      product_img_full,
      color_name,
      xxsmall,
      xsmall,
      small,
      medium,
      large,
      xlarge,
      xxlarge
    } = this.props;
    const styles = require('./Card.scss');
    // rendering product full size images
    const fullImgData = product_img_full.map((img) => {
      return (
        <Carousel.Item key={img}>
          <img width={250} height={500} src={img} alt="product-img"/>
        </Carousel.Item>
      );
      // return <img key={img} src={img} alt="product_products"/>;
    });
    // rendering product detail bullets
    const productBullets = product_key_bullets.map((bullet) => {
      return (
        <ul key={bullet}>
          <li>{bullet}</li>
        </ul>
      );
    });
    // rendering product color options
    let productColors;
    if (color_name[0] === null) {
      productColors = <div></div>;
    } else {
      productColors = color_name.map((color) => {
        return (
          <ul key={color}>
            <li>{color}</li>
          </ul>
        );
      });
    }
    // rendering product size options
    const productSizeData = [{xxsmall: xxsmall}, {xsmall: xsmall}, {small: small}, {medium: medium}, {large: large}, {xlarge: xlarge}, {xxlarge: xxlarge}];
    // console.log(productSizeData);
    productSizeData.map((size) => {
      // console.log(size);
      // console.log(Object.keys(size));
      // console.log(Object.values(size));
      if (Object.values(size) !== '0') {
        console.log('YES');
      } else {
        console.log('NO');
      }
      // if (Object.values(size) === '0') {
      //   console.log('NO');
      // } else {
      //   console.log('YES', size);
      // }
    });

    return (
      <div className={styles.card}>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <Col xs={12} sm={12} md={12}>
              <Col xs={12} sm={6} md={5}>
                <div className={styles.imgBlock}>
                  <Carousel>
                    {fullImgData}
                  </Carousel>
                </div>
              </Col>
              <Col xs={12} sm={6} md={5}>
                <div className={styles.productBlock}>
                  <h3>{product_name}</h3>
                  <h4>${product_price}</h4>
                  <p>see all {product_category}</p>
                  <br/>
                  <div>
                    {productColors}
                  </div>
                  <br/>
                  <p>
                    <span>Size:</span>
                    <br/>
                    {xxsmall} - {xsmall} - {small} - {medium} - {large} - {xlarge} - {xxlarge}
                  </p>
                  <br/>
                </div>
                <br/>
                {/* form starts */}
                <div className={styles.form}>
                  <form className="form-horizontal" onSubmit={handleSubmit}>
                      <Row className="show-grid">
                        <Col xs={4} sm={2} md={3}>
                          <div className={styles.quantity}>
                            <div className="form-group">
                              <select className="form-control" name={quantity} id="">
                                <option value="1">Qty: 1</option>
                                <option value="2">Qty: 2</option>
                                <option value="3">Qty: 3</option>
                                <option value="4">Qty: 4</option>
                                <option value="5">Qty: 5</option>
                                <option value="6">Qty: 6</option>
                                <option value="7">Qty: 7</option>
                                <option value="8">Qty: 8</option>
                                <option value="9">Qty: 9</option>
                                <option value="10">Qty: 10</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        <Col xs={8} sm={6} md={8}>
                          <div className={styles.button}>
                            <div className="form-group">
                              <p className="btn" onClick={handleSubmit}>
                                Add to Bag
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                  </form>
                  {/* form ends */}
                  <br/>
                  <br/>
                  <div className={styles.details}>
                    <span>Details:</span>
                    <p>
                      <span>Product Sku:</span> need to add this
                    </p>
                    <p>{product_descriptions}</p>
                    <div>{productBullets}</div>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
