import React, {Component, PropTypes} from 'react';
import { IndexLink } from 'react-router';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

export default class Products extends Component {
  static propTypes = {
    productsList: PropTypes.array
  }

  render() {
    const styles = require('./Products.scss');
    const {productsList} = this.props;
    let products;
    if (productsList.length === 0) {
      products = <div></div>;
    } else {
      products = productsList.map((product) => {
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
          Size: [product.xxsmall, product.xsmall, product.small, product.medium, product.large, product.xlarge, product.xxlarge],
          Type: product.product_type
        };
        return (
          <IndexLink to={productDetails.Type + '/' + productDetails.Name} className={styles.product} key={productDetails.Id} data={productDetails}>
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
      <div className={styles.products}>
        {products}
      </div>
    );
  }
}
