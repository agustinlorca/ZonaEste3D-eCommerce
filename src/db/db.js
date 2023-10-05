import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD86ZUttoC1srYQoHdnWWPhdHJgHrcC9YI",
  authDomain: "zonaeste3d-ecommerce.firebaseapp.com",
  projectId: "zonaeste3d-ecommerce",
  storageBucket: "zonaeste3d-ecommerce.appspot.com",
  messagingSenderId: "865088225528",
  appId: "1:865088225528:web:6e84f1d90f4dd9581b7b0d"
};


initializeApp(firebaseConfig);

export const db = getFirestore()