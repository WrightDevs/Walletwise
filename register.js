import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Firebase configuration
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
const auth = getAuth(app);

// Signup functionality
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const fullName = document.getElementById("signupFullName").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: fullName,
    });

    alert("Account created successfully! Welcome, " + fullName);
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
    console.error(error);
  }
});
