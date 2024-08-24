// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-marcket-2739f.firebaseapp.com",
  projectId: "property-marcket-2739f",
  storageBucket: "property-marcket-2739f.appspot.com",
  messagingSenderId: "631869073954",
  appId: "1:631869073954:web:86c8752eaddb737e8c387b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
