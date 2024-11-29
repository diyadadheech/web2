<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if all required fields are received
    if (isset($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['address'])) {
        
        // Sanitize input data to prevent XSS attacks
        $name = htmlspecialchars(trim($_POST['name']));
        $email = htmlspecialchars(trim($_POST['email']));
        $phone = htmlspecialchars(trim($_POST['phone']));
        $address = htmlspecialchars(trim($_POST['address']));

        // Display the received data in a styled way
        echo "<h3>🎉 Registration Successful!</h3>";
        echo "<p><strong>Name:</strong> $name</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Phone:</strong> $phone</p>";
        echo "<p><strong>Address:</strong> $address</p>";
    } else {
        echo "<h3>❌ Missing Required Fields</h3>";
    }
} else {
    echo "<h3>❌ Invalid Request Method</h3>";
    echo "<p>This page only accepts POST requests.</p>";
}
?>
