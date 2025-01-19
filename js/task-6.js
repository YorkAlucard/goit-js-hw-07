document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input[type="number"]');
  const createButton = controls.querySelector('button[data-create]');
  const destroyButton = controls.querySelector('button[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  // Прибираємо стрілочки в інпуті для різних браузерів
  const style = document.createElement('style');
  style.innerHTML = ` input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } input[type="number"] { -moz-appearance: textfield; } `;
  document.head.appendChild(style);

  // Підключення шрифту Montserrat
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  function createBoxes(amount) {
    // Очищуємо контейнер перед створенням нових елементів
    boxesContainer.innerHTML = '';

    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '44px';
      elements.push(box);

      size += 10; // Збільшуємо розмір наступного елемента
    }

    // Додаємо всі елементи до контейнера за одну операцію
    boxesContainer.append(...elements);
    boxesContainer.style.display = 'flex';
    boxesContainer.style.flexWrap = 'wrap'; // В горизонтальному режимі
  }

  function destroyBoxes() {
    // Очищаємо вміст контейнера
    boxesContainer.innerHTML = '';
  }

  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);

    // Валідуюмо значення інпуту
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // Очищаємо значення інпуту
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);

  // Стилізація кнопок та інпуту
  controls.style.display = 'flex';
  controls.style.gap = '16px';
  controls.style.justifyContent = 'center';
  controls.style.marginBottom = '20px';
  input.style.width = '150px';
  input.style.padding = '5px';
  // Стилізація кнопки Create
  createButton.style.backgroundColor = '#4E75FF';
  createButton.style.color = '#fff';
  createButton.style.width = '120px';
  createButton.style.padding = '8px auto';
  createButton.style.border = 'none';
  createButton.style.borderRadius = '8px';
  createButton.style.cursor = 'pointer';
  createButton.style.transition = 'background-color 0.3s';
  createButton.addEventListener('mouseover', () => {
    createButton.style.backgroundColor = '#6C8CFF';
  });
  createButton.addEventListener('mouseout', () => {
    createButton.style.backgroundColor = '#4E75FF';
  });

  // Стилізація кнопки Destroy
  destroyButton.style.backgroundColor = '#FF4E4E';
  destroyButton.style.color = '#fff';
  destroyButton.style.width = '120px';
  destroyButton.style.padding = '8px auto';
  destroyButton.style.border = 'none';
  destroyButton.style.borderRadius = '8px';
  destroyButton.style.cursor = 'pointer';
  destroyButton.style.transition = 'background-color 0.3s';
  destroyButton.addEventListener('mouseover', () => {
    destroyButton.style.backgroundColor = '#ff7070';
  });
  destroyButton.addEventListener('mouseout', () => {
    destroyButton.style.backgroundColor = '#FF4E4E';
  });
});
