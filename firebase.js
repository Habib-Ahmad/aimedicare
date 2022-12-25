import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMZIfcaADn7arqFt81jbLcMa6iiCxfIxo",
  authDomain: "aimedicare-ng.firebaseapp.com",
  projectId: "aimedicare-ng",
  storageBucket: "aimedicare-ng.appspot.com",
  messagingSenderId: "292383118437",
  appId: "1:292383118437:web:e545b90c5f6aa4ed92228c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
