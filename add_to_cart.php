<?php
// Include database configuration file that sets up the PDO connection
require 'config.php';

// Initialize cart session variable if it doesn't exist
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = []; // Create empty array for cart items
}

// Get and validate product ID from URL parameter using FILTER_VALIDATE_INT
$product_id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

// Check if we received a valid integer product ID
if ($product_id) {
    // Prepare SQL statement to verify product existence
    $stmt = $pdo->prepare("SELECT id FROM products WHERE id = ?");
    
    // Execute query with product ID parameter (prevents SQL injection)
    $stmt->execute([$product_id]);
    
    // Check if product exists in database
    if ($stmt->fetch()) {
        // Increment quantity if product exists in cart, start at 1 if new
        $_SESSION['cart'][$product_id] = ($_SESSION['cart'][$product_id] ?? 0) + 1;
        
        // Set success message in session
        $_SESSION['message'] = "Product added to cart!";
    } else {
        // Set error message if product doesn't exist in database
        $_SESSION['error'] = "Invalid product!";
    }
}

// Redirect back to previous page (maintains navigation flow)
header("Location: index.php");

// Ensure no code executes after redirect
exit();
?>