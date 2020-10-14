import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3FNmncOn3VLSe_LXTSa4gmht6pwZ7G2s",
  authDomain: "e-commerce-react-1c8b4.firebaseapp.com",
  databaseURL: "https://e-commerce-react-1c8b4.firebaseio.com",
  projectId: "e-commerce-react-1c8b4",
  storageBucket: "e-commerce-react-1c8b4.appspot.com",
  messagingSenderId: "37615854662",
  appId: "1:37615854662:web:934eb1f49428d4715b9647",
  measurementId: "G-34N3LKZFRQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
