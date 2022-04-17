import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/Auth.css";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("hi");
  };
  navigate(
    "/"
    // {
    //   to: "/",
    // replace: true,
    // state: { from: location?.state?.from },
    // }
  );
  return (
    <>
      <Form className="form mx-auto">
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="text-center">
        <Link
          to="/register"
          className="btn btn-link text-decoration-none"
          onClick={handleLogin}
        >
          Don't have an account
        </Link>
      </div>
    </>
  );
};

export default Login;
