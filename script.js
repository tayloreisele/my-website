const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const socialMediaContainer = document.querySelector('.social-media-container');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
  socialMediaContainer.classList.toggle('show');
});



// Auto-typing
var typed = new Typed(".auto-type", {
  strings: [
    "Front end web developer.",
    "Business leader.",
    "Student.",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});