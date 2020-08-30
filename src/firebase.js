import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyCMh678yYIU2sOODl6AXXVJr_27jvDLnpk",
  // authDomain: "tik-tok-clone-eb635.firebaseapp.com",
  // databaseURL: "https://tik-tok-clone-eb635.firebaseio.com",
  // projectId: "tik-tok-clone-eb635",
  // storageBucket: "tik-tok-clone-eb635.appspot.com",
  // messagingSenderId: "602358408631",
  // appId: "1:602358408631:web:a32f1830ccc2d942f2f432",
  // measurementId: "G-38YHL3X30F",
  apiKey: "AIzaSyCo-xngdWklG3CsaZfCtfobuC7vETqWQcc",
  authDomain: "tiktok-cb386.firebaseapp.com",
  databaseURL: "https://tiktok-cb386.firebaseio.com",
  projectId: "tiktok-cb386",
  storageBucket: "tiktok-cb386.appspot.com",
  messagingSenderId: "1089194964000",
  appId: "1:1089194964000:web:c61bfec0906b921845b845",
  measurementId: "G-GQ5HEFTGS6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
