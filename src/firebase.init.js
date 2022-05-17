// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM3aSkKUzQdHen8kob0joORHTxNuEQuMY",
  authDomain: "heinz-grocery-store.firebaseapp.com",
  projectId: "heinz-grocery-store",
  storageBucket: "heinz-grocery-store.appspot.com",
  messagingSenderId: "999461575489",
  appId: "1:999461575489:web:0d324cc3d8b91923ef5fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;