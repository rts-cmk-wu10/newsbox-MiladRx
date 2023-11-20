const descriptionElement = document.querySelector('.description');
const maxTextLength = 50; // Maximum length of the shortened text

const originalText = descriptionElement.textContent.trim();
let shortenedText = originalText;

if (shortenedText.length > maxTextLength) {
    shortenedText = shortenedText.substring(0, maxTextLength).trim() + '...';
}

descriptionElement.textContent = shortenedText;

