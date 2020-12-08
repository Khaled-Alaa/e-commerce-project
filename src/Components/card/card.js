import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import sample from "../../images/qwe.jpg";

import "./card.css";

const axios = require("axios");

class Product extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3004/products")
      .then((resp) => {
        debugger;
        this.setState({
          data: resp.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return this.state.data.map((product) => {
      return ["Dark"].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          className="mb-2 card"
        >
          <Card.Img variant="top" src={product.product_img} />
          <Card.Body>
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text>{product.product_pref}</Card.Text>
            <Card.Link href="#">Add to card</Card.Link>
          </Card.Body>
        </Card>
      ));
    });
  }
}

export default Product;
