// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBDx1At7Vb9adia47ziaOYC4atrcB75Qo",
  authDomain: "dragon-news-3f92e.firebaseapp.com",
  projectId: "dragon-news-3f92e",
  storageBucket: "dragon-news-3f92e.firebasestorage.app",
  messagingSenderId: "535450965894",
  appId: "1:535450965894:web:d2b1877ac4a4cf3bbbfe07",
  measurementId: "G-BVSLJ0V84C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
