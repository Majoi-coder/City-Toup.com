// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

});


// =========================
// ROOM FILTER
// =========================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const roomCards =
    document.querySelectorAll(".room-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        roomCards.forEach(room => {

            const type = room.dataset.type;

            if (filter === "all" || type === filter) {

                room.style.display = "block";

            } else {

                room.style.display = "none";

            }

        });

    });

});


// =========================
// BOOK ROOM BUTTON
// =========================

const bookButtons =
    document.querySelectorAll(".book-room");

const roomSelect =
    document.getElementById("room");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        const room =
            button.dataset.room;

        roomSelect.value = room;

        document
            .getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// =========================
// BOOKING FORM
// =========================

const bookingForm =
    document.getElementById("bookingForm");

const successModal =
    document.getElementById("successModal");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const room =
        document.getElementById("room").value;

    if (!name || !phone || !room) {

        alert("Please complete the required fields.");

        return;

    }

    successModal.classList.add("show");

    bookingForm.reset();

});


// =========================
// CLOSE MODAL
// =========================

const closeModal =
    document.getElementById("closeModal");

const modalOk =
    document.getElementById("modalOk");

closeModal.addEventListener("click", () => {

    successModal.classList.remove("show");

});

modalOk.addEventListener("click", () => {

    successModal.classList.remove("show");

});


// Close modal by clicking outside

successModal.addEventListener("click", event => {

    if (event.target === successModal) {

        successModal.classList.remove("show");

    }

});


// =========================
// DATE VALIDATION
// =========================

const checkin =
    document.getElementById("checkin");

const today =
    new Date().toISOString().split("T")[0];

checkin.min = today;


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});