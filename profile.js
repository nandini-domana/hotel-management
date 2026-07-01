import { auth, db } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

doc,

getDoc,

updateDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

onAuthStateChanged(auth,async(user)=>{

if(!user){

window.location.href="login.html";

return;

}

const docRef=doc(db,"users",user.uid);

const docSnap=await getDoc(docRef);

if(docSnap.exists()){

const data=docSnap.data();

document.getElementById("name").value=data.name;
document.getElementById("email").textContent=data.email;

document.getElementById("phone").value=data.phone; 
if(data.createdAt){

document.getElementById("date").textContent=
new Date(data.createdAt.seconds*1000).toLocaleDateString();

}else{

document.getElementById("date").textContent="Not Available";

}

}

});
document.getElementById("saveBtn").addEventListener("click",async()=>{

const user=auth.currentUser;

if(!user) return;

await updateDoc(doc(db,"users",user.uid),{

name:document.getElementById("name").value,

phone:document.getElementById("phone").value

});

alert("✅ Profile Updated Successfully");

});

document.getElementById("logoutBtn").addEventListener("click",async()=>{

await signOut(auth);

window.location.href="login.html";

});