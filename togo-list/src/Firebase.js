import firebase from "firebase/compat/app";
import "firebase/compat/database";



const firebaseConfig = {
    apiKey: "AIzaSyCOMIGme-p00Rc_LVeTlaO2OfTtq2xQPlA",
    authDomain: "todo-list-5603c.firebaseapp.com",
    projectId: "todo-list-5603c",
    storageBucket: "todo-list-5603c.appspot.com",
    messagingSenderId: "895238565272",
    appId: "1:895238565272:web:0d72d6929b403506ed0fed"
  };
  const firebaseDB = firebase.initializeApp(firebaseConfig);
  export const db = firebaseDB.database().ref();