import React, { Component } from "react";
import Card from "../../../../Components/card/card";
import "./styles.scss";

class Products extends Component {
  render() {
    const { data } = this.props;

    return data.products.map((product) => {
      return <Card data={{ product }} />;
    });
  }
}

export default Products;
