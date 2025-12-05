document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateLogin();
        });

        var signupLink = document.getElementById('signupLink');
        if (signupLink) {
            signupLink.addEventListener('click', function() {
                window.location.href = './cart.html'; //payment linkll to change
            });
        }
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            registerUser();
        });
    }
});

function registerUser() {
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var name = document.getElementById('name').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert("Please enter your email");
        return;
    }

    if (!password) {
        alert("Please enter your password");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already registered with this email");
    } else {
        users.push({ name: name, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('welcomeMessage', "Welcome to Carify, " + name + "! Have a wonderful shopping experience.");
        document.getElementById('signupForm').reset();
        window.location.href = './cart.html';// change paymenmt
    }
}

function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert("Please enter your email");
        return;
    }

    if (!password) {
        alert("Please enter your password");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('welcomeMessage', "Welcome to GAVNN, " + user.name + "! Have a wonderful experience.");
        window.location.href = './cart.html';// paymemt vfcgnage
    } else {
        alert("Invalid email or password");
    }
}
