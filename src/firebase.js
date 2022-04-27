import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRSS9MxIudDWZI5NyE0KMrE4EaJTANqXQ",
  authDomain: "clone-12d4d.firebaseapp.com",
  projectId: "clone-12d4d",
  storageBucket: "clone-12d4d.appspot.com",
  messagingSenderId: "160384816798",
  appId: "1:160384816798:web:a8756d92d285972908cd8f",
  measurementId: "G-KGH03T3ZRL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };