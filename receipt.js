document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("bookingId").textContent =
        localStorage.getItem("bookingId") || "N/A";

    document.getElementById("name").textContent =
        localStorage.getItem("name") || "N/A";

    document.getElementById("email").textContent =
        localStorage.getItem("email") || "N/A";

    document.getElementById("room").textContent =
        localStorage.getItem("room") || "N/A";

    document.getElementById("checkin").textContent =
        localStorage.getItem("checkin") || "N/A";

    document.getElementById("checkout").textContent =
        localStorage.getItem("checkout") || "N/A";

    document.getElementById("guests").textContent =
        localStorage.getItem("guests") || "N/A";

});