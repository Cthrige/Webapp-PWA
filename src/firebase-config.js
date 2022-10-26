import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7bZkZzTUesG2z5GtevDB_rnUbJ_qtYvA",
  authDomain: "webapp-e04bc.firebaseapp.com",
  projectId: "webapp-e04bc",
  storageBucket: "webapp-e04bc.appspot.com",
  messagingSenderId: "1077830184922",
  appId: "1:1077830184922:web:3fd56e9b6936ebeef35ae3",
  measurementId: "G-WXXBRJR6D9"
};

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);