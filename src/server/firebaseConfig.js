import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk-5GMoo-jlUfS0eRVSNmH47ooilwTTrM",
  authDomain: "skillop-69102.firebaseapp.com",
  projectId: "skillop-69102",
  storageBucket: "skillop-69102.appspot.com",
  messagingSenderId: "405363953596",
  appId: "1:405363953596:web:0fef469f5574a31a79a5b9",
  measurementId: "G-C6DCJHLKGP"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db,app}