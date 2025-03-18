const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');

const paragraphs = document.querySelectorAll('p');

const paragraphs = document.querySelectorAll('h2');

let currentFontSize = 16; // Tamanho de fonte inicial

increaseFontButton.addEventListener('click', () => {
  currentFontSize += 2;
  updateFontSize();
});

decreaseFontButton.addEventListener('click', () => {
  currentFontSize -= 2;
  updateFontSize();
});

function updateFontSize() {
  paragraphs.forEach(paragraph => {
    paragraph.style.fontSize = `${currentFontSize}px`;
  });
}