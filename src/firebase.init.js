// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4y9OnTmMy_Tl_Fnc3WTDc6KkJWcYngRA",
  authDomain: "ema-john-simple-8740d.firebaseapp.com",
  projectId: "ema-john-simple-8740d",
  storageBucket: "ema-john-simple-8740d.appspot.com",
  messagingSenderId: "682002205955",
  appId: "1:682002205955:web:4b79cb95259be145eeed36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;