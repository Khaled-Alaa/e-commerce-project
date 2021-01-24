import React, { Component } from "react";
import Asidebar from "../../Components/asidebar/aside";
import Product from "./partials/products/index";

import "./styles.scss";

class shopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      reset: false,
    };
  }

  handleSubmitCallback = (childData) => {
    this.setState({ data: childData });
  };

  handleresetCallBack = () => {
    this.setState({ reset: true });
  };

  handleReResetCallBack = () => {
    this.setState({ reset: false });
  };

  resetCategoryData = () => {
    this.setState({ data: "" });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Asidebar
              parentSubmitCallback={this.handleSubmitCallback}
              resetCallback={this.handleresetCallBack}
            />
          </div>
          <div className="col-10">
            <Product
              dataParentToChild={this.state.data}
              resetDataParentToChild={this.state.reset}
              reResetCallback={this.handleReResetCallBack}
              resetCategoryCallback={this.resetCategoryData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default shopPage;
