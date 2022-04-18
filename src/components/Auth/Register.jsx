import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import "../../styles/Auth.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [isAgree, setIsAgree] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user || userGoogle) {
      Swal.fire({ icon: "success", title: "Registration success" });
      navigate(location?.state?.from?.pathname || "/", {
        state: location?.state,
        replace: true,
      });
    }
  }, [user, userGoogle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(userState.email, userState.password);
    await updateProfile({ displayName: userState.name });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newUserState = { ...userState };
    newUserState[name] = value;
    setUserState(newUserState);
  };

  return (
    <>
      <Form className="form mx-auto" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            name="name"
            onBlur={handleBlur}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={(e) => setIsAgree(e.target.checked)}
            type="checkbox"
            label="Accept terms and conditions"
            checked={isAgree}
          />
        </Form.Group>

        {(loading || loadingGoogle || updating) && (
          <Spinner className="d-block my-3" animation="border" variant="info" />
        )}

        {(error || errorGoogle || updateError) && (
          <p className="text-danger fw-bold">
            {error?.message || errorGoogle?.message || updateError?.message}
          </p>
        )}
        <Button variant="primary" type="submit" disabled={!isAgree}>
          SignUp
        </Button>
      </Form>
      <div className="text-center mt-3">
        <Link
          to={{ pathname: "/login" }}
          className="btn btn-link text-danger text-decoration-none"
          state={location?.state}
        >
          Already have an account? <span className="fw-bold">Login</span>
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

export default Register;
