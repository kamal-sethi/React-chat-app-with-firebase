import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzJw8_QFvBo5Bj8VUj1MAF1Z4p4byUG4w",
  authDomain: "reactchat-6ace8.firebaseapp.com",
  projectId: "reactchat-6ace8",
  storageBucket: "reactchat-6ace8.appspot.com",
  messagingSenderId: "353033377276",
  appId: "1:353033377276:web:10e2f7da9ec84138604e79",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
