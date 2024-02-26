import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABsYhSMmOHcnGS5ZklQQdwEOMk87j7fxA",
  authDomain: "credit-work-6a592.firebaseapp.com",
  projectId: "credit-work-6a592",
  storageBucket: "credit-work-6a592.appspot.com",
  messagingSenderId: "480074111626",
  appId: "1:480074111626:web:cf5df918804b625102ab73",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
