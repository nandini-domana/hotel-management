import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {

        const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await setDoc(
            doc(db, "users", userCredential.user.uid),
            {
                name: name,
                email: email,
                phone: phone,
                createdAt: new Date()
            }
        );

        alert("Registration Successful!");

        form.reset();

        window.location.href = "login.html";

    } catch (error) {

        alert(error.message);

    }

});
