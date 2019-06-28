import firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyAH1R7_DV-I7CWKTNXzH5hbngfIuVe5RfY",
    authDomain: "mybot-13115.firebaseapp.com",
    databaseURL: "https://mybot-13115.firebaseio.com",
    projectId: "mybot-13115",
    storageBucket: "mybot-13115.appspot.com",
    messagingSenderId: "392469648151",
    appId: "1:392469648151:web:43a90d21ad38437b"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;