document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.style.display = "none";
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = "block";
    }
    }

    document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");
    if (username === "" || password === "") {
        loginError.innerText = "Please enter both username and password.";
        loginError.style.display = "block";
    } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("mainNav").style.display = "block";
        showSection("home");
        loginError.style.display = "none";
    }
    });

    const links = ["homeLink", "bookingLink", "statusLink", "checkinLink"];
    links.forEach((link) => {
    document.getElementById(link).addEventListener("click", function (event) {
        event.preventDefault();
        const section = link.replace("Link", "");
        showSection(section);
    });
    });

    document
    .getElementById("bookingButton")
    .addEventListener("click", function () {
        const departure = document.getElementById("departure").value;
        const arrival = document.getElementById("arrival").value;
        const date = document.getElementById("date").value;
        const bookingError = document.getElementById("bookingError");
        if (!departure || !arrival || !date) {
        bookingError.innerText = "Please fill in all fields.";
        bookingError.style.display = "block";
        } else {
        document.getElementById("bookingConfirmation").innerText =
            "Flight details entered. Please enter your card details.";
        document.getElementById("bookingConfirmation").style.display = "block";
        document.getElementById("cardDetails").style.display = "block";
        bookingError.style.display = "none";
        }
    });

    document
    .getElementById("confirmBookingButton")
    .addEventListener("click", function () {
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;
        const bookingError = document.getElementById("bookingError");
        if (!cardNumber || !expiryDate || !cvv) {
        bookingError.innerText = "Please enter all card details.";
        bookingError.style.display = "block";
        } else {
        const departure = document.getElementById("departure").value;
        const arrival = document.getElementById("arrival").value;
          const date = document.getElementById("date").value; // Corrected variable name
        const bookingConfirmation = document.getElementById(
            "bookingConfirmation"
        );
        bookingConfirmation.innerText = `Your flight from ${departure} to ${arrival} on ${date} is booked.`;
        bookingConfirmation.style.display = "block";
        document.getElementById("cardDetails").style.display = "none";
        bookingError.style.display = "none";
        }
    });

    document
    .getElementById("checkStatusButton")
    .addEventListener("click", function () {
        const flightNumber = document.getElementById("flightNumber").value;
        const statusError = document.getElementById("statusError");
        const flightStatus = document.getElementById("flightStatus");
        if (!flightNumber) {
        statusError.innerText = "Please enter a flight number.";
        statusError.style.display = "block";
        } else {
        flightStatus.innerText = `Flight ${flightNumber} is on time.`;
        statusError.style.display = "none";
        flightStatus.style.display = "block";
        }
    });
    document
    .getElementById("checkInButton")
    .addEventListener("click", function () {
        const flightNumber = document.getElementById("checkinFlightNumber").value;
        const checkinError = document.getElementById("checkinError");
        const checkinStatus = document.getElementById("checkinStatus");
        if (!flightNumber) {
        checkinError.innerText = "Please enter a flight number.";
        checkinError.style.display = "block";
        checkinStatus.style.display = "none";
        } else {
        checkinStatus.innerText = `Flight ${flightNumber} is on time. Proceed to gate.`;
        checkinError.style.display = "none";
        checkinStatus.style.display = "block";
        }
    });
});
