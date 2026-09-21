

lucide.createIcons();


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("svg");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i data-lucide="x"></i>';
    } else {
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    }

    lucide.createIcons();

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i data-lucide="menu"></i>';

        lucide.createIcons();
    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.innerHTML =
        '<i data-lucide="sun"></i>';
}

lucide.createIcons();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    themeToggle.innerHTML = isLight
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';

    lucide.createIcons();

});


/* =========================
   TYPING ANIMATION
========================= */

const typingText =
    document.getElementById("typingText");

const roles = [
    "Java Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

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


/* =========================
   SKILL PROGRESS ANIMATION
========================= */

const progressBars =
    document.querySelectorAll(".progress-bar");

const skillsSection =
    document.getElementById("skills");


const skillObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    progressBars.forEach(bar => {

                        const width =
                            bar.getAttribute("data-width");

                        bar.style.width = width;

                    });

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.25
        }

    );


skillObserver.observe(skillsSection);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector(".contact-form");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    contactForm.reset();

});

