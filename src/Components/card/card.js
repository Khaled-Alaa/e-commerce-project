import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import "./card.scss";

class MyCard extends Component {
  render() {
    const { data } = this.props;

    return (
      <Card text={"dark"} className="mb-2 card product-card">
        <Card.Img variant="top" src={data.product.product_img} />
        <Card.Body>
          <Card.Title>{data.product.product_name}</Card.Title>
          <Card.Text>{data.product.product_pref}</Card.Text>
          <Card.Link href="#">Add to card</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;
