import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import "../../styles/Auth.css";
import auth from "../../utils/firebase.init";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });
  const [passwordResetMode, setPasswordResetMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);

  useEffect(() => {
    if (user || userGoogle) {
      Swal.fire({ icon: "success", title: "Login success" });
      navigate(location?.state?.from?.pathname || "/", {
        state: location?.state,
        replace: true,
      });
    }
  }, [user, userGoogle]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordResetMode) return handleLogin();

    handleForgotPassword();
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(userState.email, userState.password);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newUserState = { ...userState };
    newUserState[name] = value;
    setUserState(newUserState);
  };

  const handleForgotPassword = async () => {
    await sendPasswordResetEmail(userState.email);
    toast.success("Sent email");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="form mx-auto">
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

        {!passwordResetMode && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              onBlur={handleBlur}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
        )}
        {(loading || loadingGoogle || sending) && (
          <Spinner className="d-block my-3" animation="border" variant="info" />
        )}
        {(error || errorGoogle || errorReset) && (
          <p className="text-danger">
            {error?.message || errorGoogle?.message || errorReset?.message}
          </p>
        )}
        <Button variant="primary" type="submit">
          {!passwordResetMode ? "Login" : "Reset Password"}
        </Button>
      </Form>

      <div className="text-center">
        <button
          onClick={() => setPasswordResetMode(!passwordResetMode)}
          className="btn btn-link text-decoration-none"
        >
          {!passwordResetMode ? "Forgot password?" : "Go Login mode"}
        </button>
        <br />
        <Link
          to={{ pathname: "/register" }}
          className="btn btn-link text-danger text-decoration-none"
          state={location?.state}
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
