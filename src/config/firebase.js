import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyASoRRrntlC4GuCgIcKl08Dssh2yjFdIYU",
    authDomain: "auth-with-thunk.firebaseapp.com",
    databaseURL: "https://auth-with-thunk.firebaseio.com",
    projectId: "auth-with-thunk",
    storageBucket: "auth-with-thunk.appspot.com",
    messagingSenderId: "955000679758",
    appId: "1:955000679758:web:ca054ce734d5109655421f",
    measurementId: "G-FX9SD4RTNQ"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;
