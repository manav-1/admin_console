import firebase from "firebase/app";
import { storage } from "firebase/storage"; //eslint-disable-line
var firebaseConfig = {
  storageBucket: "quizmania-cdf81.appspot.com",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
