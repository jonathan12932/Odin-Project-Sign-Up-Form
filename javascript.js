// Create an array to hold the input values
var userInfo = [];



document.getElementById('userForm').addEventListener('submit', () => {

    // Get the value from each input field
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password != confirmPassword)
        return;

    userInfo.push(new Account(firstName, lastName, email, phoneNumber, password))
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