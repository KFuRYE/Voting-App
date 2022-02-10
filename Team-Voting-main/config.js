import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA5uaA37mjgvjGApOJwFIJ-jruhXlANJ4U",
    authDomain: "voting-app-c1bfa.firebaseapp.com",
    databaseURL: "https://voting-app-c1bfa-default-rtdb.firebaseio.com",
    projectId: "voting-app-c1bfa",
    storageBucket: "voting-app-c1bfa.appspot.com",
    messagingSenderId: "515442138565",
    appId: "1:515442138565:web:8dff0915f1c34544bc3fac"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();