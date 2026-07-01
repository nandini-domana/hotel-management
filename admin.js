import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Check Login

onAuthStateChanged(auth, async(user)=>{

    if(!user){

        window.location.href="login.html";
        return;

    }

    // Change this email to YOUR email

    const adminEmail="youradmin@gmail.com";

    if(user.email!==adminEmail){

        alert("Access Denied! Admin Only");

        window.location.href="dashboard.html";

        return;

    }

    // ---------- Users ----------

    const usersSnapshot=await getDocs(collection(db,"users"));

    document.getElementById("totalUsers").textContent=
    usersSnapshot.size;

    const usersTable=document.getElementById("usersTable");

    usersTable.innerHTML="";

    usersSnapshot.forEach((doc)=>{

        const user=doc.data();

        usersTable.innerHTML+=`

        <tr>

        <td>${user.name}</td>

        <td>${user.email}</td>

        <td>${user.phone}</td>

        </tr>

        `;

    });

    // ---------- Bookings ----------

    const bookingSnapshot=await getDocs(collection(db,"bookings"));

    document.getElementById("totalBookings").textContent=
    bookingSnapshot.size;

    const bookingTable=document.getElementById("bookingsTable");

    bookingTable.innerHTML="";

    bookingSnapshot.forEach((doc)=>{

        const booking=doc.data();

        bookingTable.innerHTML+=`

<tr class="bookingRow">

<td>${booking.name}</td>

<td>${booking.room}</td>

<td>${booking.checkin}</td>

<td>${booking.checkout}</td>

<td>${booking.guests}</td>

</tr>

`;

    });

});

// Logout

document.getElementById("logoutBtn").addEventListener("click",async()=>{

    await signOut(auth);

    alert("Logged Out Successfully");

    window.location.href="login.html";

});