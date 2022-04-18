import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
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
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  useEffect(() => {
    if (user || userGoogle) {
      Swal.fire({ icon: "success", title: "Login success" });
      navigate(location?.state?.from?.pathname || "/");
    }
  }, [user, userGoogle]);

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

  return (
    <>
      <Form onSubmit={handleLogin} className="form mx-auto">
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            onBlur={handleBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            onBlur={handleBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {(loading || loadingGoogle) && (
          <Spinner className="d-block my-3" animation="border" variant="info" />
        )}
        {(error || errorGoogle) && (
          <p className="text-danger">
            {error?.message || errorGoogle?.message}
          </p>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="text-center mt-3">
        <Link
          to={{ pathname: "/register" }}
          className="btn btn-link text-danger text-decoration-none"
          state={{ from: location?.state?.from }}
        >
          Don't have an account? <span className="fw-bold">Register</span>
        </Link>
        <br />
        <div className="third-party-container mt-2">
          <Button onClick={() => signInWithGoogle()} variant="outline-info">
            <img className="me-2" src="/logos/google.png" alt="" />
            SignIn with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
