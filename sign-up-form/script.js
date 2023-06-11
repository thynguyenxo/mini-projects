const form = document.querySelector(".form");
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');


function validateEmail() {
  if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.textContent = 'please enter a valid email address';
    emailInput.style.borderBottomColor = 'red'
  } else {
    emailError.textContent = '';
    emailInput.style.borderBottomColor = '#d5987f';
  }
}

function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = 'passwords do not match';
    confirmPasswordInput.style.borderBottomColor = "red";
  } else {
    passwordError.textContent = '';
    confirmPasswordInput.style.borderBottomColor = '#d5987f';
  }
}


