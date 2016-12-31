import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/products';
import Helmet from 'react-helmet';
import { Products } from 'components';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

@connect(
    state => ({products: state.products.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Frenchie extends Component {
  static propTypes = {
    products: PropTypes.array,
    load: PropTypes.func.isRequired
  }

  render() {
    const {products} = this.props;
    const frenchieData = products.filter(product => product.product_type === 'frenchie');
    const productData = frenchieData;
    return (
      <div>
        <Helmet title="Frenchie's Closet"/>
          <Grid className="container-fluid">
            <Row className="show-grid">
              <Products
                productsList={productData}
              />
            </Row>
          </Grid>
      </div>
    );
  }
}
