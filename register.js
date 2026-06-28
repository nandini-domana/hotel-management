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

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    try{

        const userCredential =
        await createUserWithEmailAndPassword(auth,email,password);

        await setDoc(doc(db,"users",userCredential.user.uid),{

            name:name,
            email:email,
            phone:phone

        });

        alert("Registration Successful");

        window.location.href="login.html";

    }

    catch(error){

        alert(error.message);

    }

});