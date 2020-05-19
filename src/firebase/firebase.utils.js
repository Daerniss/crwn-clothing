import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCQUhFwH_mz9vBlqbENdsLDa6pJPnXn-6Y",
  authDomain: "crwn-db-8883d.firebaseapp.com",
  databaseURL: "https://crwn-db-8883d.firebaseio.com",
  projectId: "crwn-db-8883d",
  storageBucket: "crwn-db-8883d.appspot.com",
  messagingSenderId: "967071823254",
  appId: "1:967071823254:web:43a5a3faaccfb5ae8219b7",
  measurementId: "G-9RKD5289WW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;