<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Debugging: Output the received data
    echo "<h3>Data Received:</h3>";
    echo "<pre>";
    print_r($_POST); // This will display all received POST data
    echo "</pre>";

    // Extract form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);

    // Display formatted data
    echo "<h3>Formatted Data:</h3>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Phone Number:</strong> $phone</p>";
    echo "<p><strong>Address:</strong> $address</p>";
} else {
    echo "<h3>Invalid Request</h3>";
    echo "<p>This endpoint only accepts POST requests.</p>";
}
?>
