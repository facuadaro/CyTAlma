// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgEv0AwzTsA5-8NsYhUcW5mslfi9g7YSQ",
  authDomain: "cytalma.firebaseapp.com",
  projectId: "cytalma",
  storageBucket: "cytalma.appspot.com",
  messagingSenderId: "118174716368",
  appId: "1:118174716368:web:50e4c8f52fcf81e314e9d5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


export default appFirebase;