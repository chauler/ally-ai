function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple validation for empty fields
    if (username.trim() === '' || password.trim() === '') {
        errorMessage.innerText = 'Please fill in all fields.';
        return false; // Prevent form submission
    }

    // You can add more complex validation here if needed

    errorMessage.innerText = ''; // Clear error message if validation passes
    return true; // Allow form submission
}
