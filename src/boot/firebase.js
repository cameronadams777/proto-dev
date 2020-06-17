import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = process.env.FIREBASE_CONFIG;
const firebaseApp = firebase.initializeApp(config);

export const firebaseAuth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
