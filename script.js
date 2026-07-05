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

  let speed = 120;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1800;

    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;

    speed = 500;
  }

  setTimeout(type, speed);
}

type();
