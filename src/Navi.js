import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import CartSummary from "./CartSummary";

export class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" container="md" expand="md" fixed="" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <CartSummary cart={this.props.cart} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
