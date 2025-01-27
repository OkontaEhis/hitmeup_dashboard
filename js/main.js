/ Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyADvrKfDP8ThVHRHRUqIY1AaWjv5-vyY3w",
  authDomain: "hitmeupwebsite.firebaseapp.com",
  projectId: "hitmeupwebsite",
  storageBucket: "hitmeupwebsite.firebasestorage.app",
  messagingSenderId: "994947010401",
  appId: "1:994947010401:web:85c49a4cf6cbeca288bf20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form Submission Handler
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page refresh

  // Get form input values
  const name = e.target.name.value;
  const email = e.target.email.value;
  const project = e.target.project.value;
  const services = Array.from(
    e.target.querySelectorAll("input[name='service']:checked")
  ).map((checkbox) => checkbox.value);
 const other = e.target.other.value;
  
  try {
    // Add document to Firestore
    await addDoc(collection(db, "contactFormSubmissions"), {
      name,
      email,
      project,
      services,
      other,
      timestamp: new Date(), // Optional timestamp
    });

    alert("Form submitted successfully!");
    e.target.reset(); // Clear form after submission
  } catch (error) {
    console.error("Error adding document:", error);
    alert("Error submitting the form. Please try again.");
  }
});
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

// Show/Hide "Other" textarea based on checkbox
document.getElementById('other-checkbox').addEventListener('change', function() {
  const otherTextarea = document.getElementById('other-textarea');
  if (this.checked) {
    otherTextarea.classList.remove('hidden');
  } else {
    otherTextarea.classList.add('hidden');
  }
});

// Mobile menu toggle
const menuIcon = document.querySelector('.header__menu-mobile img');
const menu = document.querySelector('.header__menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('visible');
});

