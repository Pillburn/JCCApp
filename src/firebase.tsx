import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA0m6OnkBmtIMNFctPihUeIakIZpcEJmBo",
    authDomain: "jcctrack-3dea8.firebaseapp.com",
    projectId: "jcctrack-3dea8",
    storageBucket: "jcctrack-3dea8.appspot.com",
    messagingSenderId: "167043946134",
    appId: "1:167043946134:web:99e78ead03a1d4479854b7",
    measurementId: "G-3DTTW6REDJ"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const auth = app.auth()
  export const firestore = app.firestore();