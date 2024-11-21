import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQn4bEKZ0zEp8RLcEjLszwUDQUTo79oCM",
  authDomain: "react-ecommerce-eaa74.firebaseapp.com",
  projectId: "react-ecommerce-eaa74",
  storageBucket: "react-ecommerce-eaa74.appspot.com",
  messagingSenderId: "499789138122",
  appId: "1:499789138122:web:a6fc6f786331764cd30c33",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Storage

export { auth, db, app, storage };
