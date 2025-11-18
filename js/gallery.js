// Завдання 1
//З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const items = document.querySelectorAll('.item');
// беремо всі елементи з класом item
console.log('Number of categories:', items.length);
//Number of categories: 3

items.forEach(item => {
  //for Each для кожного елемента item
  const heads = item.querySelector('h2'); //назви категорій беру звідси
  const elements = item.querySelectorAll('li'); //кількість елементів у категорії беру звідси
  console.log('Category:', heads.textContent);
  //метод для для перетворення на рядок назви
  console.log('Elements:', elements.length);
  //простто кількість елементів у категорії
});
