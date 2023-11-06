

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9sLlV5_Ja7_TjqCZKPndJKasyD8xouiY",
  authDomain: "asignment-11-58fa8.firebaseapp.com",
  projectId: "asignment-11-58fa8",
  storageBucket: "asignment-11-58fa8.appspot.com",
  messagingSenderId: "959282798474",
  appId: "1:959282798474:web:9fbdc86c2e2106f1bcf273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;