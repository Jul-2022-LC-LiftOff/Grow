import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr4SiH1GLMTftkY-xnvn5bR0hgSbaZqAo",
  authDomain: "grow-25ca2.firebaseapp.com",
  projectId: "grow-25ca2",
  storageBucket: "grow-25ca2.appspot.com",
  messagingSenderId: "21467134162",
  appId: "1:21467134162:web:2ee8e29ad8c4ce3507150b",
  measurementId: "G-M3WBMDX1KS",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
