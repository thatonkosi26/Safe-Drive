import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAJBUGWDylcBts8d8pNXH-4ru5ufC3kXY",
  authDomain: "safe-drive-00.firebaseapp.com",
  projectId: "safe-drive-00",
  storageBucket: "safe-drive-00.appspot.com",
  messagingSenderId: "80416000393",
  appId: "1:80416000393:web:4b7324d097c45c2bdaf958"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const signInBtn = document.getElementById("google-login");

signInBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Always fetch the document for this UID
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // User has no Firestore document → new signup
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName || "",
        email: user.email,
        createdAt: new Date()
      });

      alert("Signup successful! Welcome to SafeDrive.");
      window.location.href = "../html/dashboard.html";
    } else {
      // User already has Firestore doc → redirect to login page
      alert("You are already registered. Please sign in.");
      window.location.href = "../html/login.html";
    }

  } catch (error) {
    console.error("Login/Signup error:", error.message);
    alert("Login failed: " + error.message);
  }
});
