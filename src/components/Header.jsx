import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dream Career</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Home
            </NavLink>

            <NavLink
              to="/checkout"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Checkout
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
