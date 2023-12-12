import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";

import './index.css';
import App from './App';


const firebaseConfig = {
  apiKey: "AIzaSyDuGsgJ0YGIfpisaY1B1f69xfb62Ex_Uxk",
  authDomain: "socialnetwork-e9b2e.firebaseapp.com",
  projectId: "socialnetwork-e9b2e",
  storageBucket: "socialnetwork-e9b2e.appspot.com",
  messagingSenderId: "916861712970",
  appId: "1:916861712970:web:0f814e316c922267db84b3",
  measurementId: "G-B9KVZJ2XM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);