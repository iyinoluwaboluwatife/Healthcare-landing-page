let signupBtn = document.querySelector('#signupbtn');

function signupHandler(e){
  e.preventDefault();
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#signupemail').value;
  let password = document.querySelector('#signuppassword').value;
  let confirmPassword = document.querySelector('#confirmpassword').value;
  let emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
  //validate the inputs of the form
  if (name === '' || email === '' || password === ''||confirmPassword === ''){
    alert('Please fill in all fields');
    return
  }
  //checks if the email entered has these characters
  if(emailValidation.test(email) === false){
    alert('Enter a valid email address!');
    return
  }
  if (password.length < 9){
    alert('Password is too short!');
    return
  }
  if (password !== confirmPassword ){
    alert('Passwords do not match!');
    return
  }
  alert(`Hello ${name}, thank you for Signing up!`);
}

let loginBtn = document.querySelector('#loginbtn');

function loginHandler(e){
  e.preventDefault();
  let loginEmail = document.querySelector('#loginemail').value;
  let loginPassword = document.querySelector('#loginpassword').value;
  let loginEmailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
  //validate the inputs of the form
  if (loginEmail === '' || loginPassword === ''){
    alert('Please fill in all fields');
    return
  }
  //checks if the email entered has these characters
  if(loginEmailValidation.test(loginEmail) === false){
    alert('Enter a valid email address!');
    return
  }
  if (loginPassword.length < 9){
    alert('Password is too short!');
    return
  }
  alert('Welcome');
}

if(signupBtn){
  signupBtn.addEventListener('click', signupHandler);
}
if(loginBtn){
  loginBtn.addEventListener('click', loginHandler);
}
