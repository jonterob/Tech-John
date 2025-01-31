<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        try {
            // Check existing subscriptions
            $stmt = $pdo->prepare("SELECT email FROM subscribers WHERE email = ?");
            $stmt->execute([$email]);
            
            if ($stmt->rowCount() > 0) {
                $_SESSION['error'] = "This email is already subscribed";
            } else {
                // Generate verification token
                $token = bin2hex(random_bytes(32));
                
                $stmt = $pdo->prepare("INSERT INTO subscribers (email, verification_token) VALUES (?, ?)");
                $stmt->execute([$email, $token]);
                
                // Send verification email
                $subject = "Verify your newsletter subscription";
                $message = "Click to verify: http://yourdomain.com/verify.php?token=$token";
                $headers = "From: newsletter@premiumgoodshub.com";
                
                mail($email, $subject, $message, $headers);
                
                $_SESSION['message'] = "Verification email sent! Check your inbox.";
            }
        } catch (PDOException $e) {
            $_SESSION['error'] = "Subscription failed: " . $e->getMessage();
        }
    } else {
        $_SESSION['error'] = "Invalid email format";
    }
}

header("Location: index.php");
exit();
?>