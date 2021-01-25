import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./aside.scss";
import { Card } from "react-bootstrap";

class asidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilters: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }


  handleChange(event) {
    if (event.target.checked === true) {
      this.setState({
        selectedFilters: {
          ...this.state.selectedFilters,
          [event.target.name]: event.target.checked,
        },
      });
    } else {
      ////////////////// delete selected category when i unchecked it to can compare with products to draw the filtered data
      const clonedSelectedFilters = { ...this.state.selectedFilters };
      delete clonedSelectedFilters[event.target.name];
      this.setState({
        selectedFilters: clonedSelectedFilters,
      });
    }
  }

  handleSubmit(event) {
    const { actions } = this.props;
    actions.onSubmit(this.state.selectedFilters);
    event.preventDefault();
  }

  handleReset(event) {
    const { actions } = this.props;
    this.setState(
      {
        selectedFilters: {},
      },
      () => {
        actions.onReset();
      }
    );
    event.preventDefault();
  }

  render() {
    const { data } = this.props;
    return (
      <Card className="aside-bar-card">
        <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <Form.Group>
            <h4>categories</h4>
          </Form.Group>
          {data.categories.map((category) => {
            return (
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={category.category_name}
                  id={category.id}
                  name={category.id}
                  ////////////////// checked is for if we checked the box become true and else become false but i change it to return the category id to konw who checked
                  checked={this.state.selectedFilters[category.id]}
                  onChange={(event) => this.handleChange(event)}
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
