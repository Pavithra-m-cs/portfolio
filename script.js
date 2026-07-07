const words = [
  "Aspiring Full Stack Developer",
  "Python Programmer",
  "Web Developer",
  "Lifelong Learner",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {
  const current = words[wordIndex];

  if (isDeleting) {
    typing.textContent = current.substring(0, charIndex--);
  } else {
    typing.textContent = current.substring(0, charIndex++);
  }

  let speed = 60;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 900;

    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;

    speed = 200;
  }

  setTimeout(type, speed);
}

type();

// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
