import React, { Component } from "react";
import { deleteProduct } from "../../Redux/index";
import { connect } from "react-redux";

import "./styles.scss";

class cartPage extends Component {
  render() {
    if (this.props.products.length) {
      return this.props.products.map((product) => (
        <div className="product-item">
          <img src={product.product_img} alt="BigCo Inc. logo" width="120" />
          <span>{product.product_pref}</span>
          <button onClick={() => this.props.deleteProduct(product)}>
            <i class="far fa-trash-alt"></i>
            Delete
          </button>
        </div>
      ));
    } else {
      return (
        <div>
          Shopping cart is currently empty Add items to your cart and view them
          here before you checkout
        </div>
      );
    }
  }
}

const mapStoreToProps = (store) => {
  return {
    products: store.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => dispatch(deleteProduct(product)),
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(cartPage);
