document.addEventListener('DOMContentLoaded', () => {
  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  const widget = document.querySelector('.widget');

  // Підключення шрифту Montserrat
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Стилізація віджета
  widget.style.display = 'flex';
  widget.style.flexDirection = 'column';
  widget.style.alignItems = 'center'; // Центруємо елементи
  widget.style.justifyContent = 'center'; // Центруємо елементи
  widget.style.height = '100vh'; // Задаємо висоту на весь екран
  widget.style.gap = '16px';

  // Стилізація тексту в <span>
  colorSpan.style.fontWeight = 'bold';

  // Стилізація кнопки
  changeColorButton.style.backgroundColor = '#007BFF';
  changeColorButton.style.color = '#fff';
  changeColorButton.style.padding = '10px 20px';
  changeColorButton.style.border = 'none';
  changeColorButton.style.borderRadius = '5px';
  changeColorButton.style.cursor = 'pointer';
  changeColorButton.style.fontSize = '16px';

  // Слухач події для зміни кольору фону
  changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
