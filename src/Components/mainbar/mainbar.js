import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import logo from "../../images/kha`.png";

import "./mainbar.css";

import { Link } from "react-router-dom";

class MainBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <img alt="logo" src={logo} className="logo"></img>
        </Link>
        <Nav className="mr-auto ">
          <Link
            to="/shop"
            style={{
              color: "white",
              margin: "0 .5rem",
            }}
          >
            Shop
          </Link>
          <Link
            to="/creator"
            style={{
              color: "white",
              margin: "0 .5rem",
            }}
          >
            About
          </Link>
          <Link
            to="/contactus"
            style={{
              color: "white",
              margin: "0 .5rem",
            }}
          >
            Contact Us
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
export default MainBar;
