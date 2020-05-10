/* == Validate Form == */
var fullname = document.getElementById('full-name');
var password = document.getElementById('password_one');
var password2 = document.getElementById('password_two');
var form = document.getElementById('formsubmit');
var errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (fullname.value === '' || fullname.value == null) {
    alert('Name is required');
  }
  if (password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters');
  }
  if (messages.length > 0) {
    e.preventDefult();
    errorElement.innerText = messages.join(', ');
  }
})


/* == Modal == */
// Open modal 
var modal = document.getElementById("myModal");

// Button to opens the modal 
var btn = document.getElementById("myBtn");

// Span element to close it 
var span = document.getElementsByClassName("close")[0];

// When user clicks on the button, open the modal //
btn.onmouseover = function () {
  modal.style.display = "block";
}

// When the user clicks on x close modal 
span.onclick = function () {
  modal.style.display = "none";
}

// If user clicks anywhere outside of the modal it closes
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* == Password Visibility == */
function revealPasswords() {
  // Open Eye Icon 
  if (password_one.getAttribute('type') === 'text') {
    password_one.setAttribute('type', 'password');
    password_two.setAttribute('type', 'password');
    eye.setAttribute('class', 'fas fa-eye');
    eye2.setAttribute('class', 'fas fa-eye');
  }
  // Close/Slash Eye Icon 
  else {
    password_one.setAttribute('type', 'text');
    password_two.setAttribute('type', 'text');
    eye.setAttribute('class', 'fas fa-eye-slash');
    eye2.setAttribute('class', 'fas fa-eye-slash');
  }
}

function comparePass() {
  if (password_one.value.length > 0 && password_two.value.length > 0) {
    if (password_one.value === password_two.value) {
      error.innerHTML = "Passwords Match";
      password_one.setCustomValidity("");
      password_two.setCustomValidity("");
    } else {
      error.innerHTML = "Passwords don't match";
      password_one.setCustomValidity("");
      password_two.setCustomValidity("");
    }
  }
}