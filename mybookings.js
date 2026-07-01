import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const table = document.getElementById("bookingTable");

onAuthStateChanged(auth, async(user)=>{

    if(!user){

        window.location.href="login.html";
        return;

    }

    const snapshot = await getDocs(collection(db,"bookings"));

    table.innerHTML="";

    snapshot.forEach((doc)=>{

        const booking = doc.data();

        if(booking.uid===user.uid){

            table.innerHTML += `

<tr>

<td>${booking.room}</td>

<td>${booking.checkin}</td>

<td>${booking.checkout}</td>

<td>${booking.guests}</td>

<td class="status">${booking.status}</td>

<td>

<button class="cancelBtn" data-id="${doc.id}">

Cancel

</button>

</td>

</tr>

`;

        }

    });

});

document.getElementById("logoutBtn").addEventListener("click",async()=>{

    await signOut(auth);

    window.location.href="login.html";

});