import React from 'react';

const Card = (props) => {
  const {product_id, product_name, product_price, product_category, product_descriptions, product_key_bullets, product_img_full, color_name, color_quantity, xxsmall, xsmall, small, medium, large, xlarge, xxlarge} = props;
  return (
    <div>
      <h3>Card View for Each Products!</h3>
      {product_id}
      <br/>
      {product_name}
      <br/>
      {product_price}
      <br/>
      {product_category}
      <br/>
      {product_descriptions}
      <br/>
      {product_key_bullets}
      <br/>
      {product_img_full}
      <br/>
      {color_name}
      <br/>
      {color_quantity}
      <br/>
      {xxsmall}
      <br/>
      {xsmall}
      <br/>
      {small}
      <br/>
      {medium}
      <br/>
      {large}
      <br/>
      {medium}
      <br/>
      {xlarge}
      <br/>
      {xxlarge}
      <br/>
    </div>
  );
};

Card.propTypes = {
  product_id: React.PropTypes.number,
  product_name: React.PropTypes.string,
  product_price: React.PropTypes.number,
  product_category: React.PropTypes.string,
  product_descriptions: React.PropTypes.string,
  product_key_bullets: React.PropTypes.array,
  product_img_full: React.PropTypes.array,
  color_name: React.PropTypes.array,
  color_quantity: React.PropTypes.array,
  xxsmall: React.PropTypes.string,
  xsmall: React.PropTypes.string,
  small: React.PropTypes.string,
  medium: React.PropTypes.string,
  large: React.PropTypes.string,
  xlarge: React.PropTypes.string,
  xxlarge: React.PropTypes.string
};
export default Card;
