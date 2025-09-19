import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBAJBUGWDylcBts8d8pNXH-4ru5ufC3kXY",
  authDomain: "safe-drive-00.firebaseapp.com",
  projectId: "safe-drive-00",
  storageBucket: "safe-drive-00.appspot.com", // fixed typo
  messagingSenderId: "80416000393",
  appId: "1:80416000393:web:4b7324d097c45c2bdaf958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const signInBtn = document.getElementById("google-login");

signInBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check Firestore for this user
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      // User exists -> redirect to dashboard
      alert(`Welcome back, ${user.displayName || "User"}!`);
      window.location.href = "../html/dashboard.html";
    } else {
      // User does not exist -> redirect to signup
      alert("You are currently not registered. Please sign up first.");
      window.location.href = "../html/signup.html";
    }

  } catch (error) {
    console.error("Login error:", error.message);
    alert("Login failed: " + error.message);
  }
});
