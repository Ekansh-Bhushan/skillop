import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIsGbQoTsncJfvB_qZzFCcH19YZASoWiE",
  authDomain: "fir-skillop.firebaseapp.com",
  projectId: "fir-skillop",
  storageBucket: "fir-skillop.appspot.com",
  messagingSenderId: "643559444342",
  appId: "1:643559444342:web:a49342abcf9b4b16f23457",
  measurementId: "G-7P8SWE90NV"
};


// const firebaseConfig = {


//   apiKey: "AIzaSyCk-5GMoo-jlUfS0eRVSNmH47ooilwTTrM",
//   authDomain: "skillop-69102.firebaseapp.com",
//   projectId: "skillop-69102",
//   storageBucket: "skillop-69102.appspot.com",
//   messagingSenderId: "405363953596",
//   appId: "1:405363953596:web:0fef469f5574a31a79a5b9",
//   measurementId: "G-C6DCJHLKGP"
// };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db, app }