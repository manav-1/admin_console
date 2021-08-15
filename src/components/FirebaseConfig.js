import firebase from "firebase/app";
import { auth } from "firebase/auth"; //eslint-disable-line
import { database } from "firebase/database"; //eslint-disable-line
import { storage } from "firebase/storage"; //eslint-disable-line
var firebaseConfig = {
  authDomain: "quizmania-cdf81.firebaseapp.com",
  storageBucket: "quizmania-cdf81.appspot.com",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
