const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

const btnPopup = document.querySelector(".login"); // The login button
const iconClose = document.querySelector(".icon-close");

// Open form when login button is clicked
btnPopup.addEventListener('click', () => {
  wrapper.classList.add("active-popup");
});

// Close form when close icon is clicked
iconClose.addEventListener('click', () => {
  wrapper.classList.remove("active-popup");
});

// Handle register button click to swap to the registration form
registerLink.addEventListener('click', () => {
  wrapper.classList.add("active");
});

// Handle login button click to swap to the login form
loginLink.addEventListener('click', () => {
  wrapper.classList.remove("active");
});
