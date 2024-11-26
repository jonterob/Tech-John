<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $registration_number = $_POST['Registration_Number'];
    $student_name = $_POST['StudentName'];
    $age = $_POST['Age'];
    $gender = $_POST['Gender'];
    $date_of_birth = $_POST['DateofBirth'];
    $programme = $_POST['Programme'];
    $school = $_POST['School'];
    $mode_of_study = $_POST['ModeofStudy'];

    // Check if the registration number already exists to avoid duplicate submission
    $checkQuery = "SELECT * FROM students WHERE registration_number = ?";
    $stmt_check = $conn->prepare($checkQuery);
    $stmt_check->bind_param("s", $registration_number);
    $stmt_check->execute();
    $result = $stmt_check->get_result();

    if ($result->num_rows > 0) {
        // If the registration number exists, display an error message
        $message = "❌ Duplicate registration number! Please use a unique registration number.";
        $message_type = "error";
    } else {
        // Prepare and bind SQL query to insert new record
        $stmt = $conn->prepare("INSERT INTO students (registration_number, student_name, age, gender, date_of_birth, programme, school, mode_of_study) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("isisssss", $registration_number, $student_name, $age, $gender, $date_of_birth, $programme, $school, $mode_of_study);

        // Execute and check for success
        if ($stmt->execute()) {
            $message = "✅ Thank you! Your registration details are submitted successfully 🏆";
            $message_type = "success";
        }

        $stmt->close();
    }

    $stmt_check->close();
}

$conn->close();
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <link rel="stylesheet" type="text/css"  href="bend.css">
</head>
<body>

<div class="container">
    <!-- Success message only -->
    <?php if (isset($message)): ?>
        <div class="message <?= $message_type ?>">
            <?= $message ?>
        </div>
    <?php endif; ?>
</div>
</body>
</html>
