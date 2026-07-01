import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Check if user is logged in
onAuthStateChanged(auth, async (user) => {

  if (user) {

    try {

      const docRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        document.getElementById("username").textContent =
          docSnap.data().name;

      } else {

        document.getElementById("username").textContent =
          "Guest";

      }

    } catch (error) {

      console.log(error);

    }

  } else {

    // User not logged in
    window.location.href = "login.html";

  }

});

// Logout

document.getElementById("logoutBtn").addEventListener("click", async () => {

  await signOut(auth);

  alert("Logged Out Successfully");

  window.location.href = "login.html";

});