import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAnvNZsXB6nfVPvmTySJSmy5dXg7FdTevE",
  authDomain: "crwn-db-97094.firebaseapp.com",
  projectId: "crwn-db-97094",
  storageBucket: "crwn-db-97094.appspot.com",
  messagingSenderId: "19421053844",
  appId: "1:19421053844:web:197320224b10ff9fb48581",
  measurementId: "${config.measurementId}",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
