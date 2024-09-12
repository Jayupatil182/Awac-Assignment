document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;

    let isValid = true;

    // Email Validation
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password Validation
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // If valid, call login API
    if (isValid) {
        showLoadingSpinner();
        loginUser(email, password, rememberMe);
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Login API call
function loginUser(email, password, rememberMe) {
    console.log('Logging in with:', { email, password, rememberMe });
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ username: email, password: password }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    .then(response => {
        hideLoadingSpinner();
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed. Invalid response from server.');
        }
    })
    .then(data => {
        console.log('Login successful:', data);
        alert('Login successful!');
        resetForm(); // Reset form after successful login
    })
    .catch(error => {
        hideLoadingSpinner();
        console.error('Error during login:', error);
        alert('Login failed!');
        resetForm(); // Reset form after failed login
    });
}

// Loading Spinner Control
function showLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'block';
    document.querySelector('.submit-btn').disabled = true;
}

function hideLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
    document.querySelector('.submit-btn').disabled = false;
}

// Reset form fields and state
function resetForm() {
    document.getElementById('loginForm').reset(); // Reset the form fields
    document.getElementById('emailError').style.display = 'none'; // Hide error messages
    document.getElementById('passwordError').style.display = 'none'; // Hide error messages
}
