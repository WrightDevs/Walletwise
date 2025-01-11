import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get input values
  const email = document.getElementById('signupEmail').value;
  const fullName = document.getElementById('signupFullName').value;
  const password = document.getElementById('signupPassword').value;

  try {
    // Create user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Update user profile with full name
    await updateProfile(userCredential.user, { displayName: fullName });

    // Show success message and redirect
    alert(`Welcome, ${fullName}! Your account has been created.`);
    window.location.href = 'login.html';
  } catch (error) {
    // Display user-friendly error messages
    if (error.code === 'auth/email-already-in-use') {
      alert('This email is already in use. Please try another.');
    } else if (error.code === 'auth/weak-password') {
      alert('Your password is too weak. Please use at least 6 characters.');
    } else {
      alert(error.message);
    }
  }
});
