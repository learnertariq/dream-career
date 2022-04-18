import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/Header.css";
import auth from "../utils/firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

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
              to="/blogs"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              About
            </NavLink>
            {!user && (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                Login
              </NavLink>
            )}
            {user && (
              <>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Logout
                </NavLink>
                <span>{user.displayName}</span>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
