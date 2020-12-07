import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

const axios = require("axios");

class Slider extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3004/advertising")
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
    return (
      <Carousel>
        {this.state.data.map((ad) => {
          debugger;
          return (
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={ad.ad_img} alt={ad.id} />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
export default Slider;
