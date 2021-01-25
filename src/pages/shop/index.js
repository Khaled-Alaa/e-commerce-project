import React, { Component } from "react";
import axios from "axios";
import Asidebar from "../../Components/asidebar/aside";
import Products from "./partials/products";

import "./styles.scss";

class shopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/products")
      .then((resp) => {
        this.setState({
          products: resp.data,
          filteredProducts: resp.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3004/category")
      .then((resp) => {
        this.setState({
          categories: resp.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  ////////////////// we need to have products and filtered products, always filteres from products and draw the filtered products

  handleSubmitFilters(filters) {
    if (Object.keys(filters).length > 0) {
      const filteredProducts = this.state.products.filter((product) => {
        return Object.keys(filters).includes(product.product_category);
      });

      this.setState({
        filteredProducts: filteredProducts,
      });
    }
  }

  handleResetFilters() {
    this.setState({
      filteredProducts: this.state.products,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Asidebar
              data={{ categories: this.state.categories }}
              actions={{
                onSubmit: (filters) => {
                  this.handleSubmitFilters(filters);
                },
                onReset: () => this.handleResetFilters(),
              }}
            />
          </div>
          <div className="col-10">
            <Products data={{ products: this.state.filteredProducts }} />
          </div>
        </div>
      </div>
    );
  }
}

export default shopPage;
