import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

// Initialize Firebase

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
