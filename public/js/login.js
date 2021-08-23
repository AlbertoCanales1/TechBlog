const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }
};


const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup');
    const password = document.querySelector('#password-signup');
    const email = document.querySelector('#email-signup');

    if (username && password && email) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username:username.value, password:password.value, email:email.value }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);