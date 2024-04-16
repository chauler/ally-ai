<?php
// Assuming you have an OpenAI API key
$apiKey = 'YOUR_OPENAI_API_KEY';

// Get user message from the frontend
$userMessage = json_decode(file_get_contents('php://input'), true)['message'];

// Send user message to ChatGPT using OpenAI API
$response = file_get_contents('https://api.openai.com/v1/engines/davinci-codex/completions', false, stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-type: application/json\r\nAuthorization: Bearer $apiKey\r\n",
        'content' => json_encode(['prompt' => $userMessage, 'max_tokens' => 100]),
    ],
]));

// Decode the JSON response
$data = json_decode($response, true);

// Send ChatGPT's response back to the frontend
echo json_encode(['message' => $data['choices'][0]['text']]);
?>
