// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Firebase configuration for WalletWise
const firebaseConfig = {
  apiKey: "AIzaSyAEUaYXgNfOlHzy7qQkFMZHsHpImpVRO54",
  authDomain: "walletwise2024.firebaseapp.com",
  projectId: "walletwise2024",
  storageBucket: "walletwise2024.firebasestorage.app",
  messagingSenderId: "297434724089",
  appId: "1:297434724089:web:d7b07bdbb92ca6a4be1428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
auth.languageCode = 'en';

// Set up Google Authentication provider
const provider = new GoogleAuthProvider();

// Display user details or sign-in state
onAuthStateChanged(auth, (user) => {
  const userStatus = document.getElementById('user-status');
  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');
  const userPhoto = document.getElementById('user-photo');

  if (user) {
    // User is signed in
    userStatus.textContent = "User is signed in.";
    userName.textContent = `Name: ${user.displayName || "N/A"}`;
    userEmail.textContent = `Email: ${user.email || "N/A"}`;
    userPhoto.innerHTML = user.photoURL
      ? `<img src="${user.photoURL}" alt="User Photo" width="100" />`
      : "No photo available.";
  } else {
    // No user is signed in
    userStatus.textContent = "No user is signed in.";
    userName.textContent = "";
    userEmail.textContent = "";
    userPhoto.innerHTML = "";
  }
});
