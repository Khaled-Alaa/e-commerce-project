import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Slider extends Component {
  render() {
    return (
      <Carousel>
        {this.props.data.map((ad) => {
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
