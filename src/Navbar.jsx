import {
  Navbar as BootstrapNavbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState((state, props) => ({ isOpen: !state.isOpen }));
  }

  render() {
    return (
      <div>
        <BootstrapNavbar color="dark" dark expand="md">
          <NavbarBrand href="/">foobar.sh</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  News
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </BootstrapNavbar>
      </div>
    );
  }
}
