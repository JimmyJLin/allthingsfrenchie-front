// import React, {Component, PropTypes} from 'react';
// import {reduxForm} from 'redux-form';
// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';
//
// @reduxForm({
//   form: 'addToKart',
//   fields: ['productName', 'productId', 'quantity', 'price']
// })
// export default class Card extends Component {
//   static propTypes = {
//     fields: PropTypes.object.isRequired,
//     handleSubmit: PropTypes.func.isRequired,
//     resetForm: PropTypes.func.isRequired,
//     product_id: PropTypes.number,
//     product_name: PropTypes.string,
//     product_price: PropTypes.string,
//     product_category: PropTypes.string,
//     product_descriptions: PropTypes.string,
//     product_key_bullets: PropTypes.array,
//     product_img_full: PropTypes.array,
//     color_name: PropTypes.array,
//     color_quantity: PropTypes.array,
//     xxsmall: PropTypes.string,
//     xsmall: PropTypes.string,
//     small: PropTypes.string,
//     medium: PropTypes.string,
//     large: PropTypes.string,
//     xlarge: PropTypes.string,
//     xxlarge: PropTypes.string
//   }
//   render() {
//     const {
//       fields: {productName, price},
//       handleSubmit,
//       resetForm,
//       product_name,
//       product_price,
//       product_category,
//       product_descriptions,
//       product_key_bullets,
//       product_img_full,
//       color_name,
//       xxsmall,
//       xsmall,
//       small,
//       medium,
//       large,
//       xlarge,
//       xxlarge
//     } = this.props;
//     const styles = require('./Card.scss');
//     const fullImgData = product_img_full.map((img) => {
//       return <img key={img} src={img} alt="product_products"/>;
//     });
//     const renderInput = (field, label) =>
//       <div className="form-group">
//         <label htmlFor={field.name}></label>
//         <div className="col-sm-8">
//           <input type="text" className="form-control" id={field.name} {...field}/>
//         </div>
//       </div>;
//     return (
//       <div className={styles.card}>
//         <h3>Card View for Each Products!</h3>
//         <Grid className="container-fluid">
//           <Row className="show-grid">
//             <Col xs={12} md={6}>
//               <div className={styles.imgBlock}>
//                 <Grid className="container-fluid">
//                   <Row className="show-grid">
//                     {fullImgData}
//                   </Row>
//                 </Grid>
//               </div>
//             </Col>
//             <Col xs={12} md={6}>
//               <div className={styles.productBlock}>
//                 <h3>{product_name}</h3>
//                 <h4>${product_price}</h4>
//                 <h5>see all {product_category}</h5>
//                 <p>
//                   <span>Color:</span>
//                   <br/>
//                   {color_name}
//                 </p>
//                 <p>
//                   <span>Size:</span>
//                   <br/>
//                   {xxsmall} - {xsmall} - {small} - {medium} - {large} - {xlarge} - {xxlarge}
//                 </p>
//                 <br/>
//                 <div>
//                   <span>Details:</span>
//                   <p>{product_descriptions}</p>
//                   <p>{product_key_bullets}</p>
//                 </div>
//               </div>
//               <div>
//
//               </div>
//             </Col>
//           </Row>
//         </Grid>
//         <form className="form-horizontal" onSubmit={handleSubmit}
//           >
//             {renderInput(productName, {product_name})}
//             {renderInput(price, {product_price})}
//             <div className="form-group">
//               <div className="col-sm-offset-2 col-sm-10">
//                 <button className="btn btn-success" onClick={handleSubmit}>
//                   <i className="fa fa-paper-plane"/> Submit
//                 </button>
//                 <button className="btn btn-warning" onClick={resetForm} style={{marginLeft: 15}}>
//                   <i className="fa fa-undo"/> Reset
//                 </button>
//               </div>
//             </div>
//           </form>
//       </div>
//     );
//   }
// }
