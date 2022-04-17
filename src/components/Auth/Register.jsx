import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import "../../styles/Auth.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
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
    if (user) {
      Swal.fire({ icon: "success", title: "Registration success" });
      navigate(location?.state?.from?.pathname || "/");
    }
  }, [user]);

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
    <Form className="form mx-auto" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          onBlur={handleBlur}
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          onBlur={handleBlur}
          type="email"
          placeholder="Enter email"
        />
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onChange={(e) => setIsAgree(e.target.checked)}
          type="checkbox"
          label="Accept terms and conditions"
          checked={isAgree}
        />
      </Form.Group>

      {(loading || updating) && (
        <Spinner className="d-block my-3" animation="border" variant="info" />
      )}

      {(error || updateError) && (
        <p className="text-danger fw-bold">{error?.message}</p>
      )}
      <Button variant="primary" type="submit" disabled={!isAgree}>
        SignUp
      </Button>
    </Form>
  );
};

export default Register;
