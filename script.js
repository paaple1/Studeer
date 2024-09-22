document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('theme-toggle').addEventListener('change', toggleTheme);

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    
    // Predefined responses (you can add more here)
    const responses = {
        'plan': 'Here is a study plan: 2 hours of math, 1 hour of physics.',
        'motivate': 'Keep going! You are doing great!',
        'tips': 'Try reviewing the key concepts before diving into practice problems.',
    };

    const response = responses[userInput.toLowerCase()] || 'Sorry, I don’t understand that command.';
    chatWindow.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;
    
    document.getElementById('user-input').value = '';  // Clear input
    chatWindow.scrollTop = chatWindow.scrollHeight;    // Auto-scroll to bottom
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
