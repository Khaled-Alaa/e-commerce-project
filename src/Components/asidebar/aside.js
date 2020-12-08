import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./aside.scss";
import { Card } from "react-bootstrap";

const axios = require("axios");

class asidebar extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3004/category")
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
      <Card className="aside-bar-card">
        <Form >
          <Form.Group controlId="formBasicEmail">
            <h4>categories</h4>
          </Form.Group>
          {this.state.data.map((categoryname) => {
            return (
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={categoryname.category_name}
                />
              </Form.Group>
            );
          })}
          <Button variant="primary" type="submit">
            Done
          </Button>
        </Form>
      </Card>
    );
  }
}

export default asidebar;
