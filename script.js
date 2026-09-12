function toggleService(bar) {
  bar.classList.toggle("active");
}

const words = ["Web Developer", "UI/UX Designer", "Informatics Student"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
};

function openImage(src) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("previewImage").src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

function typeEffect() {
  const textElement = document.querySelector(".text-animation span");

  if (!textElement) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let whatsappNumber = "628xxxxxxxxxx";

  let text = `Hello, I am ${name}

Email:
${email}

Phone:
${phone}

Subject:
${subject}

Message:
${message}`;

  let url =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");

  document.querySelector("form").reset();
}

typeEffect();
