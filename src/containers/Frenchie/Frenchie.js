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
        const id = product.id;
        const name = product.name;
        return (
          <h4 key={id}>{name}</h4>
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
