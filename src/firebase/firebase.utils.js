import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDI5mmZRg0QbY5TbWPIJDAZ3yshY8UzlTw",
        authDomain: "getalot-db.firebaseapp.com",
    databaseURL: "https://getalot-db.firebaseio.com",
    projectId: "getalot-db",
    storageBucket: "getalot-db.appspot.com",
    messagingSenderId: "266844273766",
    appId: "1:266844273766:web:75f08b234a8f799fb701a7",
    measurementId: "G-JP130D4DLJ"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;