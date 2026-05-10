
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }

  });

});


//diri tong typing
const typing = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "UI Designer",
  "JavaScript Developer",
  "Freelancer",
  "Gwapo Ko"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex--);
  } else {
    typing.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length + 1) {

    isDeleting = true;

    setTimeout(typeEffect, 1000);

  } else if (isDeleting && charIndex === 0) {

    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;

    setTimeout(typeEffect, 300);

  } else {

    setTimeout(typeEffect, isDeleting ? 50 : 120);

  }

}

typeEffect();



document.querySelector(".primary-btn")
.addEventListener("click", () => {
  alert("Lamat sa pag Hire Loy");
});
