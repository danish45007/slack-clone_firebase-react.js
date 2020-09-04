import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-cgMa4Of0Tkvh6AAkKU6pZR2cd3GZFLA",
    authDomain: "slack-clone-decbf.firebaseapp.com",
    databaseURL: "https://slack-clone-decbf.firebaseio.com",
    projectId: "slack-clone-decbf",
    storageBucket: "slack-clone-decbf.appspot.com",
    messagingSenderId: "924473699353",
    appId: "1:924473699353:web:8da4efad555798d8e74e88",
    measurementId: "G-KMLELZCZ5Q"
  };

// connecting to the firestore DB
const firebaseApp = firebase.initializeApp(firebaseConfig)
// get database
const db = firebaseApp.firestore();
// user auth
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();


export { auth, provider};
export default db;