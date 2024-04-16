function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Display user message
    chatBox.innerHTML += `<div class="user-message">${userMessage}</div>`;
    userInput.value = "";

    // Simulate ChatGPT response (replace this with actual API call)
    const chatGPTResponse = "AI: This is a sample response from ChatGPT.";
    chatBox.innerHTML += `<div class="chatgpt-message">${chatGPTResponse}</div>`;

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
