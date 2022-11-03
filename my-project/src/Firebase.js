import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCm44LgPNf5dzcLQK3V9rwlMvrB1aukyTs",
    authDomain: "test-project-83fed.firebaseapp.com",
    databaseURL: "https://test-project-83fed-default-rtdb.firebaseio.com",
    projectId: "test-project-83fed",
    storageBucket: "test-project-83fed.appspot.com",
    messagingSenderId: "1061443771658",
    appId: "1:1061443771658:web:e069f49a26840f5f9b6ef3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = firebase.auth();