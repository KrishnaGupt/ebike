import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-OSG2b2ZshMe99dKXIOlWpnk9zwXYmhM",
  authDomain: "unicus-8ced4.firebaseapp.com",
  projectId: "unicus-8ced4",
  storageBucket: "unicus-8ced4.appspot.com",
  messagingSenderId: "734073374324",
  appId: "1:734073374324:web:edb31f39db84077fb7f321"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);