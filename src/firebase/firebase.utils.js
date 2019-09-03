import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// authentication

const config = {
    apiKey: "AIzaSyApJzqT5DyOIR8GtPcFmDSBh38r6WwMZXs",
    authDomain: "crwn-db-3aec8.firebaseapp.com",
    databaseURL: "https://crwn-db-3aec8.firebaseio.com",
    projectId: "crwn-db-3aec8",
    storageBucket: "",
    messagingSenderId: "302347215412",
    appId: "1:302347215412:web:6a6fb64ba32f3781"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
