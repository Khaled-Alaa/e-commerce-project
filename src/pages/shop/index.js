import React, { Component } from "react";
import Asidebar from "../../Components/asidebar/aside";
import Product from "../../Components/card/card";

import "./styless.scss";

class shopPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Asidebar />
          </div>
          <div className="col-10">
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

export default shopPage;
