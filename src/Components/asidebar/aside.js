import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./aside.scss";
import { Card } from "react-bootstrap";

const axios = require("axios");

class asidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { allData: [], data: [], values: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:3004/category")
      .then((resp) => {
        this.setState({
          data: resp.data,
          allData: resp.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(event, catid) {
    this.setState({
      values: [...this.state.values, catid],
    });
  }

  handleSubmit(event) {
    this.props.parentSubmitCallback(this.state.values);
    event.preventDefault();
  }

  handleReset(event) {
    this.props.resetCallback();
    event.preventDefault();
  }
  render() {
    return (
      <Card className="aside-bar-card">
        <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <Form.Group>
            <h4>categories</h4>
          </Form.Group>
          {this.state.data.map((category) => {
            return (
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={category.category_name}
                  id={category.id}
                  value={category.category_name}
                  onChange={(event) => this.handleChange(event, category.id)}
                />
              </Form.Group>
            );
          })}
          <Button className="sub-button" variant="primary" type="submit">
            Done
          </Button>
          <Button variant="secondary" type="reset">
            Reset
          </Button>
        </Form>
      </Card>
    );
  }
}

export default asidebar;
