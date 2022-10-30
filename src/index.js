import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIi69uI6rKs4kk3gRbZi9BalhaAz5AHyI",
  authDomain: "coderhouse-ecommerce-proyecto.firebaseapp.com",
  projectId: "coderhouse-ecommerce-proyecto",
  storageBucket: "coderhouse-ecommerce-proyecto.appspot.com",
  messagingSenderId: "394931538811",
  appId: "1:394931538811:web:8dbd286b5aaf4c0b30cbde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
