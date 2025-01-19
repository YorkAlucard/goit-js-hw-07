document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  // Підключення шрифту Montserrat
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  nameInput.addEventListener('input', () => {
    const trimmedInput = nameInput.value.trim();
    nameOutput.textContent = trimmedInput === '' ? 'Anonymous' : trimmedInput;
  });
});
