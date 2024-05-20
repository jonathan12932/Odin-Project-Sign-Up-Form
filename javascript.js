// Create an array to hold the input values
var userInfo = [];


document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the value from each input field
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;  // Stop the function if passwords don't match
    }

    // Create a new Account object and push it into the userInfo array
    userInfo.push(new Account(firstName, lastName, email, phoneNumber, password));

    console.log(userInfo);  // Optionally, log the user info to the console or handle further
});

class Account {
    constructor(firstName, lastName, email, phoneNumber, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}
