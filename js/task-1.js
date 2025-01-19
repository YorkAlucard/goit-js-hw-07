document.addEventListener('DOMContentLoaded', () => {
  // Порахувати й вивести в консоль кількість категорій в ul#categories
  const categoriesList = document.querySelectorAll('#categories .item');
  console.log(`Number of categories: ${categoriesList.length}`);

  // Для кожного елемента li.item в ul#categories знайти й вивести в консоль текст заголовка і кількість елементів у категорії
  categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul li');
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`);
  });

  // Додати стилі для контейнера категорій
  categoriesList.forEach(category => {
    category.style.listStyle = 'none';
    category.style.backgroundColor = '#f6f6fe';
    category.style.border = '1px solid #ddd';
    category.style.borderRadius = '5px';
    category.style.padding = '15px';
    category.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    category.style.width = '300px'; // Змінити ширину контейнера категорій

    const categoryTitle = category.querySelector('h2');
    categoryTitle.style.fontSize = '24px';
    categoryTitle.style.color = '#333';
    categoryTitle.style.textAlign = 'left';
    categoryTitle.style.marginBottom = '10px';
    categoryTitle.style.borderBottom = '2px solid #ddd';
    categoryTitle.style.paddingBottom = '5px';

    const categoryItemsList = category.querySelector('ul');
    categoryItemsList.style.listStyle = 'none'; // Прибрати крапки зі списків
    categoryItemsList.style.padding = '0';
    categoryItemsList.style.margin = '0';

    const categoryItems = category.querySelectorAll('ul li');
    categoryItems.forEach(item => {
      item.style.fontSize = '18px';
      item.style.color = '#555';
      item.style.padding = '5px 0';
      item.style.borderBottom = '1px solid #eee';
      item.style.marginBottom = '8px'; // Додати відстань між елементами
    });

    // Видалити нижню межу та відстань для останнього елемента списку
    const lastItem = categoryItems[categoryItems.length - 1];
    lastItem.style.borderBottom = 'none';
    lastItem.style.marginBottom = '0';
  });
});
