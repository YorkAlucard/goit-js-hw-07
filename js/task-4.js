document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', event => {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log(formData); // Виводить об'єкт із введеними даними в консоль
    loginForm.reset(); // Очищає значення полів форми
  });
  const form = document.querySelector('.login-form');
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const submitButton = form.querySelector('button[type="submit"]');
  const labels = form.querySelectorAll('label');

  // Стилізація форми
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.alignItems = 'flex-start';
  form.style.width = '480px';
  form.style.gap = '20px';
  form.style.padding = '20px';
  form.style.border = '2px solid #ffffff';
  form.style.borderRadius = '10px';
  form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

  // Стилізація лейблів
  labels.forEach(label => {
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.marginBottom = '10px';

    // Стилізація полів вводу
    const inputFields = [emailInput, passwordInput];
    inputFields.forEach(input => {
      input.style.Width = '360px';
      input.style.padding = '10px';
      input.style.border = '1px solid #808080';
      input.style.borderRadius = '5px';
      input.style.boxSizing = 'border-box';
      input.addEventListener('mouseover', () => {
        input.style.border = '1px solid #000000';
      });
      input.addEventListener('mouseout', () => {
        input.style.border = '1px solid #808080';
      });
    });
  });

  emailInput.addEventListener('focus', () => {
    emailInput.placeholder = 'Type area';
  });

  emailInput.addEventListener('blur', () => {
    emailInput.placeholder = '';
  });

  // Стилізація кнопки
  submitButton.style.backgroundColor = '#4E75FF';
  submitButton.style.color = '#fff';
  submitButton.style.padding = '10px 20px';
  submitButton.style.border = 'none';
  submitButton.style.borderRadius = '5px';
  submitButton.style.cursor = 'pointer';
  submitButton.style.fontSize = '16px';
  // Додати hover ефект для кнопки
  submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = '#6C8CFF';
  });
  submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#007BFF';
  });
});
