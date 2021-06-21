import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOmTkJfgDUzHjnvObnNNdpomhELaNpxNw",
    authDomain: "whatsapp-clone-368dd.firebaseapp.com",
    projectId: "whatsapp-clone-368dd",
    storageBucket: "whatsapp-clone-368dd.appspot.com",
    messagingSenderId: "423969011059",
    appId: "1:423969011059:web:556a6b61ffd86671ef8106",
    measurementId: "G-G1GLSTCYTB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

//This is for the google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;