import React, { Component } from "react";
import isEqual from "lodash/isEqual";
import Card from "../../../../Components/card/card";
import "./styles.scss";

const axios = require("axios");

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      products: [],
      filteredproucts: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dataParentToChild.length > 0) {
      if (nextProps.dataParentToChild.length > prevState.category.length) {
        return { ...prevState, category: nextProps.dataParentToChild };
      }
    } else {
      return null;
    }
  }

  reReset() {
    this.props.reResetCallback();
  }

  resetCategory() {
    this.props.resetCategoryCallback();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.resetDataParentToChild == false) {
      if (this.state.filteredproucts.length >= 0) {
        if (
          prevProps.dataParentToChild.length !==
          this.props.dataParentToChild.length
        ) {
          if (isEqual(this.props.dataParentToChild, this.state.category)) {
            this.filtercards();
          }
        }
      }
    } else {
      if (this.state.products.length > this.state.filteredproucts.length) {
        this.setState({ filteredproucts: this.state.products });
        this.reReset();
        this.resetCategory();
      }
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/products")
      .then((resp) => {
        this.setState({
          products: resp.data,
          filteredproucts: resp.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filtercards() {
    const filteredData = this.state.products.filter((product) => {
      return this.state.category.includes(product.product_category);
    });
    this.setState({ filteredproucts: filteredData });
  }

  render() {
    return this.state.filteredproucts.map((product) => {
      return <Card data={{ product }} />;
    });
  }
}

export default Product;
