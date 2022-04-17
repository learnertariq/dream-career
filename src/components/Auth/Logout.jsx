import { useEffect } from "react";
import { signOut } from "firebase/auth";
import auth from "../../utils/firebase.init";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    signOut(auth);
    navigate("/");
  }, []);
};

export default Logout;
