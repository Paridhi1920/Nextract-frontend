import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCy4n9s2J7qbANDj7imdQVFEq2y_yz_LIg",
    authDomain: "nextract-auth.firebaseapp.com",
    projectId: "nextract-auth",
    storageBucket: "nextract-auth.firebasestorage.app",
    messagingSenderId: "663188624580",
    appId: "1:663188624580:web:fc1e67a40ea8bd81ad2591"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
