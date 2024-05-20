// Create an array to hold the input values
var userInfo = [];



document.getElementById('userForm').addEventListener('submit', function (event) {

    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the value from each input field
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Add values to the array
    userInfo.push(firstname, lastname, email);

    // Optional: Display the array in the console or elsewhere
    console.log(userInfo);

    // Clear the form fields after submission
    this.reset();
});