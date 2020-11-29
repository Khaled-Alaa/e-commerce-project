import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";


class FooterBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="footer">
        Copyright © 2020. Khaa` Shopstore. C. R. No. 1010032264. Online C. R.
        No. 1010654213 All Rights Reserved.
      </Navbar>
    );
  }
}
export default FooterBar;
