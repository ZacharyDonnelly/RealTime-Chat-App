import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwstwp0mXf_tBolc0CJ7uNl0PoW5b0dm0",
  authDomain: "personal-react-fb.firebaseapp.com",
  databaseURL: "https://personal-react-fb.firebaseio.com",
  storageBucket: "personal-react-fb.appspot.com",
  projectId: "personal-react-fb",
  messagingSenderId: "1029893914121",
  appId: "1:1029893914121:web:b596b1100f19f0080902d8",
  measurementId: "G-NKDD92L4CN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

firestore.settings({ timestampsInSnapshots: true });

export default firebase;
