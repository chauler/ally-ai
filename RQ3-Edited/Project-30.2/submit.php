<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Here, you would typically process the data, like storing it in a database or sending an email
    // For demonstration, we will just display the submitted data

    echo "<h1>Form Submission</h1>";
    echo "<p>Name: " . htmlspecialchars($name) . "</p>";
    echo "<p>Email: " . htmlspecialchars($email) . "</p>";
    echo "<p>Message: " . nl2br(htmlspecialchars($message)) . "</p>";

    // In a real application, you would redirect or inform the user of successful submission
}
else {
    echo "Form submission error.";
}
?>
