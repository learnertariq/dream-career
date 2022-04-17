import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "../../styles/Auth.css";
import auth from "../../utils/firebase.init";
import Swal from "sweetalert2";

const Login = () => {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      Swal.fire({ icon: "success", title: "Login success" });
      navigate(location?.state?.from?.pathname || "/");
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(userState.email, userState.password);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newUserState = { ...userState };
    newUserState[name] = value;
    setUserState(newUserState);
  };

  console.log(error?.name);

  return (
    <>
      <Form onSubmit={handleLogin} className="form mx-auto">
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onBlur={handleBlur}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onBlur={handleBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        {error && <p className="text-danger">{error.message}</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="text-center">
        <Link
          to={{ pathname: "/register" }}
          className="btn btn-link text-danger text-decoration-none"
          state={{ from: location?.state?.from }}
        >
          Don't have an account? <span className="fw-bold">Register</span>
        </Link>
      </div>
    </>
  );
};

export default Login;
