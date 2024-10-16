import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQn4bEKZ0zEp8RLcEjLszwUDQUTo79oCM",
  authDomain: "react-ecommerce-eaa74.firebaseapp.com",
  projectId: "react-ecommerce-eaa74",
  storageBucket: "react-ecommerce-eaa74.appspot.com",
  messagingSenderId: "499789138122",
  appId: "1:499789138122:web:a6fc6f786331764cd30c33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
