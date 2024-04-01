<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // You can add further processing, validation, or save to a database here

    // Simple response for demonstration purposes
    echo "Thank you, $name, for contacting us!";
} else {
    header("Location: index.html");
    exit();
}
?>
