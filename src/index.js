import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC62gOfbyyuUYi-lQ_EJgVxUo7gVWoPmhQ",
  authDomain: "apgovwebsite-21585.firebaseapp.com",
  projectId: "apgovwebsite-21585",
  storageBucket: "apgovwebsite-21585.appspot.com",
  messagingSenderId: "348830971217",
  appId: "1:348830971217:web:a5e08a1086ba6bac92cf70",
  measurementId: "G-RDXT5CN10F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

