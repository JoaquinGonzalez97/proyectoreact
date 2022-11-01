// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ_IYR5VLyCxwbdHsmNJqulrox8_fk-LU",
  authDomain: "proyectoreact-2316c.firebaseapp.com",
  projectId: "proyectoreact-2316c",
  storageBucket: "proyectoreact-2316c.appspot.com",
  messagingSenderId: "192127291687",
  appId: "1:192127291687:web:bdd4476ae08acf19ecd902",
  measurementId: "G-CRP3YPWE5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);