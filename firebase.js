// Import Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Paste YOUR Firebase Config Here

const firebaseConfig = {
  apiKey: "AIzaSyD2xlrcm6gx_-VNcnJHK1tUK_2uEwA8EIE",
  authDomain: "hotel-management-12fbe.firebaseapp.com",
  projectId: "hotel-management-12fbe",
  storageBucket: "hotel-management-12fbe.firebasestorage.app",
  messagingSenderId: "785933073029",
  appId: "1:785933073029:web:a4a00bf34cce30d9ec87ec",
  measurementId: "G-GYLTJX9HR0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };