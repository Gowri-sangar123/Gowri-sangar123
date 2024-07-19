
const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const middlename = document.querySelector('#middlename');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const error = document.getElementById('error')

form.addEventListener('submit', function(e) {
    `e.preventDefault()`;
   
    if (validateOutput()) {
        form.submit(); // Submit the form if validation passes
    } else {
        console.log('Form has errors'); // Log errors or handle them appropriately
    }
});

function validateOutput() {
    const firstnameval = firstname.value.trim();
    const middlenameval = middlename.value.trim();
    const lastnameval = lastname.value.trim();
    const emailval = email.value.trim();

    let success = true;

    if (firstnameval === '') {
        setError(firstname, 'First name is required');
        success = false;
    } else {
        setSuccess(firstname);
    }

    if (middlenameval === '') {
        setError(middlename, 'Middle name is required');
        success = false;
    } else {
        setSuccess(middlename);
    }

    if (lastnameval === '') {
        setError(lastname, 'Last name is required');
        success = false;
    } else {
        setSuccess(lastname);
    }

    if (emailval === '') {
        setError(email, 'Email is required');
        success = false;
    } else if (!validateEmail(emailval)) {
        setError(email, 'Please enter a valid email');
        success = false;
    } else {
        setSuccess(email);
    }

    if (success) {
        console.log('Form is valid');
    } else {
        console.log('Form has errors');
    }
  
}

function setError(element, message) {
    const formGroup = element.parentElement;
    const errorElement = formGroup.querySelector('.error');

    errorElement.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
}

function setSuccess(element) {
    const formGroup = element.parentElement;
    const errorElement = formGroup.querySelector('.error');

    errorElement.innerText = '';
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/);
};
function checkPassword() {
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("confirmpassword").value;
    var message = document.getElementById("message");
    if (password.length !== 0) {
        if (password === cpassword) {
            message.textContent = "Passwords match!";
            message.style.backgroundColor = "green";
        } else {
            message.textContent = "Passwords do not match!";
            message.style.backgroundColor = "red";
        }
    }
  }
  
  document.getElementById("password").addEventListener("input", checkPassword);
  document.getElementById("confirmpassword").addEventListener("input", checkPassword);

  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="COURSE"]');
  const maxAllowed = 2;
  
  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          let checkedCount = document.querySelectorAll('input[type="checkbox"][name="COURSE"]:checked').length;
  
          if (checkedCount > maxAllowed) {
              this.checked = false; // Uncheck the current checkbox if limit exceeded
          }
      });
  });
  
