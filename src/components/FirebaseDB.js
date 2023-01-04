import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHwLH2GKTryXkXv-PLwaSsQ2fRW-fO9M",
  authDomain: "todo-app-ffa63.firebaseapp.com",
  projectId: "todo-app-ffa63",
  storageBucket: "todo-app-ffa63.appspot.com",
  messagingSenderId: "906832471967",
  appId: "1:906832471967:web:b90c67b44db1c6d2e9ffaa",
  measurementId: "G-PDR8GLVKVJ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);



export const db = firebase.firestore();
db.settings({ timestampInSnapshots: true });


