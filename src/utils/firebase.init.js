// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCILjFXuEB33lDHWwxdtyru0Bvse2P6Dkg",
  authDomain: "dream-career-e6d69.firebaseapp.com",
  projectId: "dream-career-e6d69",
  storageBucket: "dream-career-e6d69.appspot.com",
  messagingSenderId: "623754032127",
  appId: "1:623754032127:web:ab5c44b63c9b6acae92dca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
