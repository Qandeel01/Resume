const mobileBar = document.getElementById("mobile-bar");
const navLinks = document.getElementById("nav-links");
const mobileBarIcon = document.getElementById("toggle-bar");

mobileBar.addEventListener('click', function(e) {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    mobileBarIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
})

navLinks.addEventListener('click', function() {
    navLinks.classList.remove("open");
    mobileBarIcon.setAttribute("class", "fa-solid fa-bars");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".hero-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".hero-content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".hero-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".order-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".event-content", {
    duration: 1000,
});