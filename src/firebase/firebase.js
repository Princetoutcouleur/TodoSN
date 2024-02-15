import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./firebaseConfig";

// Initialisation de Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export des services Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebaseApp;
