import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyDUFM10Vom9Cxd32MbT7dbvFMLKLmCMl1E",
  authDomain: "quizmania-cdf81.firebaseapp.com",
  databaseURL: "https://quizmania-cdf81-default-rtdb.firebaseio.com",
  projectId: "quizmania-cdf81",
  storageBucket: "quizmania-cdf81.appspot.com",
  messagingSenderId: "826674071410",
  appId: "1:826674071410:web:144c2e1bcb4696664d3feb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase