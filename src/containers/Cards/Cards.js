import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Card } from 'components';

@connect(
    state => ({products: state.products.data}))
export default class Cards extends Component {
  static propTypes = {
    products: PropTypes.array,
    params: PropTypes.object
  }
  render() {
    const { products, params } = this.props;
    const name = params.name;
    const productArry = products;
    const currentProduct = productArry.filter((el) => {
      return el.product_name === name;
    });

    // console.log('currentProduct', currentProduct);

    return (
      <div className="container">
        <Card
          product_id={currentProduct[0].product_id}
          product_name={currentProduct[0].product_name}
          product_price={currentProduct[0].product_price}
          product_category={currentProduct[0].product_category}
          product_descriptions={currentProduct[0].product_descriptions}
          product_key_bullets={currentProduct[0].product_key_bullets}
          product_img_full={currentProduct[0].product_img_full}
          color_name={currentProduct[0].color_name}
          color_quantity={currentProduct[0].color_quantity}
          xxsmall={currentProduct[0].xxsmall}
          xsmall={currentProduct[0].xsmall}
          small={currentProduct[0].small}
          medium={currentProduct[0].medium}
          large={currentProduct[0].large}
          xlarge={currentProduct[0].xlarge}
          xxlarge={currentProduct[0].xxlarge}
        />
      </div>
    );
  }
}
