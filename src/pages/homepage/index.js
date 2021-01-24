import React, { Component } from "react";
import axios from "axios";

import Slider from "../../Components/slider/slider";

import "./styles.scss";

class homePage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3004/advertising")
      .then((resp) => {
        this.setState({
          data: resp.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return <Slider data={this.state.data} />;
  }
}

export default homePage;
