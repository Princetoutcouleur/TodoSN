import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

// Initialisation de Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export des services Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebaseApp;
