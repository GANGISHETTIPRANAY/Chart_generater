// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Function to validate login credentials
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
    } else if (username === 'admin' && password === 'password123') { // Sample credentials
        errorMessage.textContent = '';
        alert('Login successful!');
        window.open('dashboard.html', '_self');
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
}
