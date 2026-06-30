import {
collection,
addDoc,
getDocs
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

const snapshot = await getDocs(collection(db,"bookings"));

let available = true;

snapshot.forEach((doc)=>{

const booking = doc.data();

if(

booking.room===room &&

(

(checkin>=booking.checkin && checkin<booking.checkout) ||

(checkout>booking.checkin && checkout<=booking.checkout) ||

(checkin<=booking.checkin && checkout>=booking.checkout)

)

){

available=false;

}

});

if(!available){

alert("❌ Sorry! This room is already booked for the selected dates.");

return;

}

await addDoc(collection(db,"bookings"),{

uid:auth.currentUser.uid,

name,

email,

phone,

room,

checkin,

checkout,

guests,

status:"Confirmed",

createdAt:new Date()

});

const bookingId = Math.floor(Math.random()*100000);

localStorage.setItem("bookingId",bookingId);

localStorage.setItem("name",name);

localStorage.setItem("email",email);

localStorage.setItem("room",room);

localStorage.setItem("checkin",checkin);

localStorage.setItem("checkout",checkout);

localStorage.setItem("guests",guests);

window.location.href="receipt.html";
}

catch(error){

alert(error.message);

}

});
