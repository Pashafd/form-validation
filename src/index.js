// import style
import './style/index.scss';

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const paswordTwo = document.querySelector('#passwordTwo');
const succesForm = [false, false, false, false];

form.addEventListener('submit', checkInputs);

function checkInputs(event) {
  event.preventDefault();

  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordTwoValue = paswordTwo.value.trim();

  if (userNameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    succesForm[0] = false;
  } else {
    setSuccesFor(username);
    succesForm[0] = true;
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
    succesForm[1] = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
    succesForm[1] = false;
  } else {
    setSuccesFor(email);
    succesForm[1] = true;
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    succesForm[2] = false;
  } else {
    setSuccesFor(password);
    succesForm[2] = true;
  }

  if (passwordTwoValue === '') {
    setErrorFor(passwordTwo, 'Password cannot be blank');
    succesForm[3] = false;
  } else if (passwordValue !== passwordTwoValue) {
    setErrorFor(passwordTwo, 'Passwords must be the same');
    succesForm[3] = false;
  } else {
    setSuccesFor(passwordTwo);
    succesForm[3] = true;
  }

  showSuccesValidationMessage(userNameValue);
}

function showSuccesValidationMessage(userNameValue) {
  if (
    succesForm[0] === true &&
    succesForm[1] === true &&
    succesForm[2] === true &&
    succesForm[3] === true
  ) {
    const validFormMessage = document.createElement('div');
    const validFormBtn = document.createElement('button');

    validFormBtn.innerText = 'Back';

    validFormMessage.classList.add('succes-validation');
    validFormMessage.innerText = `Welcome ${userNameValue}`;

    form.innerHTML = '';
    form.append(validFormMessage);
    form.appendChild(validFormBtn);

    form.removeEventListener('submit', checkInputs);
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
