// Sample JavaScript using Fetch API to communicate with the backend (PHP)
function sendMessage() {
    const userMessage = document.getElementById('user-message').value;

    // Display user message in the chat container
    displayMessage('User', userMessage);

    // Send user message to the backend for processing
    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        // Display ChatGPT's response in the chat container
        displayMessage('ChatGPT', data.message);
    })
    .catch(error => console.error('Error:', error));
}

function displayMessage(sender, message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatContainer.appendChild(messageElement);
}
