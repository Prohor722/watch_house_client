// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKY6GrDUTgKSJsYN9BXCrCpqKX1hqO1PY",
  authDomain: "watch-house-efd0d.firebaseapp.com",
  projectId: "watch-house-efd0d",
  storageBucket: "watch-house-efd0d.appspot.com",
  messagingSenderId: "922525030577",
  appId: "1:922525030577:web:10e9f5e5b6a8f68913aa90",
  measurementId: "G-7B6QH44D3Y"
  
  // apiKey:process.env.REACT_API_KEY,
  // authDomain:process.env.REACT_AUTH_DOMAIN,
  // projectId:process.env.REACT_PROJECT_ID,
  // storageBucket:process.env.REACT_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_MESSAGING_SENDER_ID,
  // appId:process.env.REACT_APP_ID,
  // measurementId:process.env.REACT_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;