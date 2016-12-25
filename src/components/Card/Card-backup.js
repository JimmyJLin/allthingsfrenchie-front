// import React, {Component, PropTypes} from 'react';
// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';
//
// export default class Card extends Component {
//   static propTypes = {
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
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }
