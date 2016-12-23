import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/frenchie';
import Helmet from 'react-helmet';

@connect(
    state => ({frenchie: state.frenchie.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Frenchie extends Component {
  static propTypes = {
    frenchie: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  render() {
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
        let bullets;
        const bulletsData = product.product_key_bullets;
        bullets = bulletsData.map((bullet) => {
          console.log('bullet', bullet);
          bullets = <div><ul><li>{bullet}</li></ul></div>;
        });
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
          <h4 key={productDetails.Id}>
            <img src={productDetails.Thumbnail} alt=""/>
            <br/>
            <br/>
            Name: {productDetails.Name}
            <br/>
            Price: ${productDetails.Price}
            <br/>
            Category: {productDetails.Category}
            <br/>
            Descriptions: {productDetails.Descriptions}
            <br/>
            Bullets: {bullets}
            <br/>
            Colors: {productDetails.ColorName}
            <br/>
            Size: {productDetails.Size}
          </h4>
        );
      });
    }
    return (
      <div className="container">
        <h1>Frenchie's Closet</h1>
        <Helmet title="Frenchie's Closet"/>
        {products}
      </div>
    );
  }
}
