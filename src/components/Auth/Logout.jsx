import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../utils/firebase.init";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  signOut(auth);
  return useNavigate()("/");
};

export default Logout;
