// ==============================
// TYPING ANIMATION
// ==============================

const typingText = document.getElementById("typingText");

const roles = [
    "Python Developer",
    "MCA Graduate",
    "Software Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ==============================
// THEME TOGGLE
// ==============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");
    }
});


// Load saved theme

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");

    const icon = themeToggle.querySelector("i");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}


// ==============================
// SCROLL HEADER
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ==============================
// SCROLL TO TOP
// ==============================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }

});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();