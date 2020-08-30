import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    toggle = () => {
      const { isOpen } = this.state;
      this.setState({ isOpen: !isOpen });
    }

    render() {
      const { isOpen } = this.state;

      const buildNavbar = () => {
        const { authed } = this.props;

        if (authed) {
          return (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/new">New Birb</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.logMeOut}><i className="fas fa-kiwi-bird fa-lg"></i></NavLink>
                </NavItem>
              </Nav>
          );
        }

        return <Nav className="ml-auto" navbar></Nav>;
      };

      return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Birb Watcher</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
      );
    }
}

export default MyNavBar;
