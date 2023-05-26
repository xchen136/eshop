
// import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAiHFi4OHKhl6YAj6paqDQJMI91cx75cgg",
//   authDomain: "eshop-f8069.firebaseapp.com",
//   projectId: "eshop-f8069",
//   storageBucket: "eshop-f8069.appspot.com",
//   messagingSenderId: "536549634645",
//   appId: "1:536549634645:web:eee471474e328ae9fa9adc",
//   measurementId: "G-JTDX9LNJ1Y"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };




import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAiHFi4OHKhl6YAj6paqDQJMI91cx75cgg",
  authDomain: "eshop-f8069.firebaseapp.com",
  projectId: "eshop-f8069",
  storageBucket: "eshop-f8069.appspot.com",
  messagingSenderId: "536549634645",
  appId: "1:536549634645:web:eee471474e328ae9fa9adc",
  measurementId: "G-JTDX9LNJ1Y"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };