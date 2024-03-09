const login_password = 'NIELIT';

document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == "" || password == "") {
        alert("You need to enter both the username and password!");
    }
    else if (password.toLowerCase() === login_password.toLowerCase()) {
        window.location.href = 'mainpage.html';
    } else {
        alert(`Please enter the correct password ${username}!`);
    }
});

document.getElementById('clickBtn').addEventListener('click', function () {
    const username2 = document.getElementById('username').value;

    const reply = window.prompt("Terms & Conditions: All images displayed on the website are the property of the respective owners and are protected by copyright laws. Users are not permitted to download, reproduce, or distribute any images without the explicit permission of the owner or the website owner. The online gallery website reserves the right to remove any content that is deemed inappropriate, offensive, or violates copyright laws.As a precautionary measure, the password will be changed regularly. If you agree to the Terms and Conditions of the NIELIT Diary, please reply with 'agree' or 'yes'.");

    if (reply === null) {
        // User clicked "Cancel"
        return;
    }

    if (reply.toLowerCase() === "agree" || reply.toLowerCase() == "yes") {
        window.alert(`Thanks for choosing NIELIT Diary ${username2}. Please contact the developer to obtain the password for the NIELIT Diary :)`);
        window.location.href = 'https://wa.me/message/CROU64O5MEFSH1';
    }
    else {
        window.alert("ALERT: You need to agree to the Terms and Conditions of NIELIT Diary to access it.");
    };
});

window.onload = function () {
    document.getElementById('loading-overlay').style.display = 'none';
}