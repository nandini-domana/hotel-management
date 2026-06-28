import { db } from "./firebase.js";

import {

collection,
addDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form=document.getElementById("bookingForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const phone=document.getElementById("phone").value;

const room=document.getElementById("room").value;

const checkin=document.getElementById("checkin").value;

const checkout=document.getElementById("checkout").value;

const guests=document.getElementById("guests").value;

try{

await addDoc(collection(db,"bookings"),{

name,

email,

phone,

room,

checkin,

checkout,

guests,

createdAt:new Date()

});

alert("Booking Successful");

form.reset();

}

catch(error){

alert(error.message);

}

});