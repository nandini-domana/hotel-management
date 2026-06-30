import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword,
sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form=document.getElementById("loginForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Login Successful");

window.location.href="index.html";

}

catch(error){

alert(error.message);

}

});
document.getElementById("forgotPassword").addEventListener("click",async()=>{

const email=prompt("Enter your registered email");

if(!email) return;

try{

await sendPasswordResetEmail(auth,email);

alert("Password reset email sent successfully.");

}

catch(error){

alert(error.message);

}

});
