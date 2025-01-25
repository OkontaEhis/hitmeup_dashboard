// script.js
function startCountdown(durationInDays, countdownElementId) {
  const countdownElement = document.getElementById(countdownElementId);
  const endTime = new Date().getTime() + durationInDays * 24 * 60 * 60 * 1000;

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
      countdownElement.innerHTML = "Offer has ended!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

startCountdown(20, "countdown");

    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const menuIcon = document.querySelector('.header__menu-mobile img');
const menu = document.querySelector('.header__menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('visible');
});

