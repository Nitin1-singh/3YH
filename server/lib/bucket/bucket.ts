// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkyO6_Evw5aXpO8lv127-A_Q9Xt39dhDE",
  authDomain: "yhh-ed18d.firebaseapp.com",
  projectId: "yhh-ed18d",
  storageBucket: "yhh-ed18d.appspot.com",
  messagingSenderId: "235508747685",
  appId: "1:235508747685:web:c942a7bce510470acc2c4c",
  measurementId: "G-VPXWRBE9X4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storageDB = getStorage(app)