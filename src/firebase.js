import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD13JZ8UlFkPFOFQ4LIh2_mwySJ6ugZEuQ",
  authDomain: "fir-auth-a31ab.firebaseapp.com",
  projectId: "fir-auth-a31ab",
  storageBucket: "fir-auth-a31ab.appspot.com",
  messagingSenderId: "930748767164",
  appId: "1:930748767164:web:41cbb056a01e4ab16ee9b9",
  measurementId: "G-0LM18NRX11",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, signInWithGoogle };
