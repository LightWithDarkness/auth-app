// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'auth-app-mkv.firebaseapp.com',
  projectId: 'auth-app-mkv',
  storageBucket: 'auth-app-mkv.appspot.com',
  messagingSenderId: '519841494562',
  appId: '1:519841494562:web:7b9284c975df2eb04bbc7b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
