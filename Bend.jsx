// This function is triggered when the user submits the form.
function validateForm() {
    // Get the value of the password field
    var password = document.getElementById("password").value;

    // Define the regular expression pattern for validating a strong password.
    // This pattern ensures the password contains:
    // - At least one lowercase letter
    // - At least one uppercase letter
    // - At least one number
    // - At least one special character from the allowed set @$!%*?&#
    // - At least 8 characters in total
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // If the password does not match the pattern, show an alert and prevent form submission
    if (!passwordPattern.test(password)) {
        // Display an error message
        alert("Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
        // Return false to prevent the form from being submitted
        return false;
    }

    // If the password matches the pattern, we proceed to disable the submit button
    // Disable the submit button to prevent the user from clicking it multiple times
    var submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    // Change the submit button text to indicate that the form is being submitted
    submitButton.value = "Submitting...";

    // Return true to allow the form submission to proceed
    return true;
}

// This function is triggered when the "Clear" button is clicked
function clearForm() {
    // Reset all form fields to their initial state (empty or default values)
    document.getElementById("surveyForm").reset();
}
