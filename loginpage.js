const login_password = 'NIELIT';

document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == "" || password == "") {
        alert("You need to enter both the username and password!");
    }
    else if (password.toLowerCase() === login_password.toLowerCase()) {
        window.location.href = 'mainpage.html';
        // Display the username on the mainpage.html
        const usernameSpan = document.getElementById('output');
        usernameSpan.textContent = `Welcome, ${username}!`;
    } else {
        alert(`Please enter the correct password ${username}!`);
    }
});