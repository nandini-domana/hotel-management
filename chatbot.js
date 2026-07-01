const chatBox=document.getElementById("chatBox");

const input=document.getElementById("userInput");

const button=document.getElementById("sendBtn");

button.addEventListener("click",reply);

input.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

reply();

}

});

function reply(){

const question=input.value.trim();

if(question==="") return;

chatBox.innerHTML+=`

<div class="user">

${question}

</div>

`;

let answer="Sorry, I didn't understand your question.";

const q=question.toLowerCase();

if(q.includes("room")){

answer="🏨 We have Deluxe, Premium and Luxury Suite rooms.";

}

else if(q.includes("price")){

answer="💰 Deluxe ₹2999, Premium ₹4999, Luxury Suite ₹7999.";

}

else if(q.includes("check")){

answer="🕑 Check-in: 12 PM | Check-out: 11 AM.";

}

else if(q.includes("wifi")){

answer="📶 Free high-speed WiFi is available.";

}

else if(q.includes("restaurant")){

answer="🍽 Restaurant timings: 7 AM - 11 PM.";

}

else if(q.includes("pool")){

answer="🏊 Swimming Pool is open from 6 AM - 9 PM.";

}

else if(q.includes("contact")){

answer="📞 Call us at +91 9876543210 or email hotelparadise@gmail.com";

}

else if(q.includes("booking")){

answer="📅 Go to the Booking page from your dashboard and fill in your details.";

}

chatBox.innerHTML+=`

<div class="bot">

${answer}

</div>

`;

chatBox.scrollTop=chatBox.scrollHeight;

input.value="";

}