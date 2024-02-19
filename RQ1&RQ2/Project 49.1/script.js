// Function to simulate text translation
function translateTo(language) {
  // Logic to translate text goes here
  // For example, you can replace text content with translations
  // This is a simplified example
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const paragraphs = section.querySelectorAll('p');
    paragraphs.forEach(p => {
      if (language === 'es') {
        if (p.textContent === 'Text description goes here...') {
          p.textContent = 'Descripción del texto...';
        } else if (p.textContent === 'Another text description...') {
          p.textContent = 'Otra descripción del texto...';
        }
        // Translate other texts as needed
      } else {
        // Default to English or other languages
        if (p.textContent === 'Descripción del texto...') {
          p.textContent = 'Text description goes here...';
        } else if (p.textContent === 'Otra descripción del texto...') {
          p.textContent = 'Another text description...';
        }
        // Translate other texts as needed
      }
    });
  });
}
