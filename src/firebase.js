// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmZKnyvH5JCZKIlaDUkL9mgrKwyvA8g2g",
    authDomain: "coderhousee-commerse.firebaseapp.com",
    projectId: "coderhousee-commerse",
    storageBucket: "coderhousee-commerse.appspot.com",
    messagingSenderId: "475195950981",
    appId: "1:475195950981:web:792bdbfb588beb0a0226ec"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;