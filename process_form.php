<?php
// Database connection settings
$servername = "localhost"; // The server hosting the MySQL database (for XAMPP, it's usually 'localhost')
$username = "root"; // The MySQL username (for XAMPP, it's usually 'root')
$password = ""; // The MySQL password (for XAMPP, it's usually empty by default)
$dbname = "survey"; // The name of the database we are working with

// Create a new connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful, and if not, show an error message
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve and sanitize form values to prevent SQL Injection
    $firstname = mysqli_real_escape_string($conn, $_POST['Firstname']);
    $middlename = mysqli_real_escape_string($conn, $_POST['Middlename']);
    $lastname = mysqli_real_escape_string($conn, $_POST['Lastname']);
    $age = mysqli_real_escape_string($conn, $_POST['Age']);
    $email = mysqli_real_escape_string($conn, $_POST['Email']);
    $occupation = mysqli_real_escape_string($conn, $_POST['Occupation']);
    $password = $_POST['password']; // Password is not sanitized here as it will be hashed later

    // Validate if any required field is empty
    if (empty($firstname) || empty($middlename) || empty($lastname) || empty($age) || empty($email) || empty($occupation) || empty($password)) {
        $error_message = 'Please fill in all the fields.';
    }

    // Validate email format using PHP's built-in filter
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = 'Invalid email format.';
    }

    // Check if the email already exists in the database
    $sql_check_email = "SELECT * FROM survey_data WHERE Email = '$email'";
    $result = $conn->query($sql_check_email);

    // If a record with the same email exists, set the error message
    if ($result->num_rows > 0) {
        $error_message = 'Sorry! This email has already been used for a previous submission. Please use a different email.';
    }

    // If no error, proceed with inserting data into the database
    if (empty($error_message)) {
        // Hash the password before saving it to the database (for security)
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Prepare the SQL query to insert the form data into the database
        $sql = "INSERT INTO survey_data (Firstname, Middlename, Lastname, Age, Email, Occupation, Password)
                VALUES ('$firstname', '$middlename', '$lastname', '$age', '$email', '$occupation', '$hashedPassword')";

        // Execute the query and check if the insertion was successful
        if ($conn->query($sql) === TRUE) {
            $success_message = 'Congratulations your Form submission is successful!';
        } else {
            $error_message = 'Error: ' . $conn->error;
        }
    }

    // Close the database connection
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form_Submission_Result</title>
    <link rel="stylesheet" href="result.css">
</head>
<body>
    <div class="result-container">
        <!-- Display the error or success message -->
        <?php if (!empty($error_message)) : ?>
            <div class="error"><?php echo $error_message; ?></div>
        <?php elseif (!empty($success_message)) : ?>
            <div class="success"><?php echo $success_message; ?></div>
        <?php endif; ?>

        <!-- Display form data after successful submission -->
        <?php if (isset($success_message)) : ?>
            <div class="data">
                <?php foreach ($_POST as $key => $value) : ?>
                    <p><strong><?php echo ucfirst($key); ?>:</strong> <?php echo htmlspecialchars($value); ?></p>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <!-- Link to redirect back to the form page -->
        <div class="button-container">
            <a href="index.html">Go Back to Form</a>
        </div>
    </div>
</body>
</html>
