import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore'
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBSGCGUw_vlB1xKxM2t_n-tZOnRbJg_JGw",

  authDomain: "todo-app-f9df6.firebaseapp.com",

  projectId: "todo-app-f9df6",

  storageBucket: "todo-app-f9df6.appspot.com",

  messagingSenderId: "1057586045923",

  appId: "1:1057586045923:web:0ccc34d49a3656e178f6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

export { db }