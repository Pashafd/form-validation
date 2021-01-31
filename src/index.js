// import style
import './style/index.scss';

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const paswordTwo = document.querySelector('#passwordTwo');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordTwoValue = paswordTwo.value.trim();

  if (userNameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccesFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccesFor(password);
  }

  if (passwordTwoValue === '') {
    setErrorFor(passwordTwo, 'Password cannot be blank');
  } else if (passwordValue !== passwordTwoValue) {
    setErrorFor(passwordTwo, 'Passwords must be the same');
  } else {
    setSuccesFor(passwordTwo);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';

  setTimeout(() => {
    formControl.className = 'form-control';
  }, 4000);
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control succes';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
