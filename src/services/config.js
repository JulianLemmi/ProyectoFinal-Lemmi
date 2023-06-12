import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA3TjiW1QqgMxxNQkSedFLLStbYUiNVzts",
  authDomain: "powergy-46c6b.firebaseapp.com",
  projectId: "powergy-46c6b",
  storageBucket: "powergy-46c6b.appspot.com",
  messagingSenderId: "855160344006",
  appId: "1:855160344006:web:a060a6f4b3c4cdf24cb6c7",
  measurementId: "G-M466STZN88"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);