import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import logo from "../../images/khaa.png";

import "./mainbar.scss";
import { Link } from "react-router-dom";

class MainBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <img alt="logo" src={logo} className="logo"></img>
        </Link>
        <Nav className="mr-auto ">
          <Link to="/shop" className="mainbar-links">
            Shop
          </Link>
          <Link to="/creator" className="mainbar-links">
            About
          </Link>
          <Link to="/contactus" className="mainbar-links">
            Contact Us
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Link to="/cart" className="mainbar-links">
          <i className="fas fa-shopping-cart shopping-car"></i>
          Cart
        </Link>
      </Navbar>
    );
  }
}
export default MainBar;
