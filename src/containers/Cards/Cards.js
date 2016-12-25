import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Card } from 'components';

@connect(
    state => ({frenchie: state.frenchie.data}))
export default class Cards extends Component {
  static propTypes = {
    frenchie: PropTypes.array,
    params: PropTypes.object
  }
  render() {
    const { frenchie, params } = this.props;
    const name = params.name;
    const productArry = frenchie;
    const currentProuct = productArry.filter((el) => {
      return el.product_name === name;
    });

    console.log('currentProuct', currentProuct);

    return (
      <div className="container-fluid">
        <Card
          product_id={currentProuct[0].product_id}
          product_name={currentProuct[0].product_name}
          product_price={currentProuct[0].product_price}
          product_category={currentProuct[0].product_category}
          product_descriptions={currentProuct[0].product_descriptions}
          product_key_bullets={currentProuct[0].product_key_bullets}
          product_img_full={currentProuct[0].product_img_full}
          color_name={currentProuct[0].color_name}
          color_quantity={currentProuct[0].color_quantity}
          xxsmall={currentProuct[0].xxsmall}
          xsmall={currentProuct[0].xsmall}
          small={currentProuct[0].small}
          medium={currentProuct[0].medium}
          large={currentProuct[0].large}
          xlarge={currentProuct[0].xlarge}
          xxlarge={currentProuct[0].xxlarge}
        />
      </div>
    );
  }
}
