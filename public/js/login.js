// This is the page for loging in.
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If your email and password work then it will replace the login screen with the next screen.
        if (response.ok) {
            document.location.replace('/dashboard');
            // If your email and password are incorrect it will send you an error
        } else {
            alert(response.statusText);
        }
    }
};

//This is the page for signing up.
const newSignupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

// If your signup credentials work then it will replace the login screen with the next screen.
        if (response.ok) {
            document.location.replace('/login');
// If your signup credentials don't work then it will send you an alert error.
        } else {
            alert('Unable to make a new Profile. Give it another shot!');
        }
    }
};

// This will take you to the login form upon submitting with login credentials.
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// This will take you to the signup form upon clicking submit without login credentials.
document.querySelector('.new-signup-form').addEventListener('submit', newSignupFormHandler);