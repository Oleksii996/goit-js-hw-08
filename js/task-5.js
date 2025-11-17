// Завдання 5
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

const changeColorforBtn = document.querySelector('.change-color'); //
const colorSpan = document.querySelector('.color'); //
const body = document.body; //
// беремо в роботу елементи

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} // готова функція

changeColorforBtn.addEventListener('click', onChangeColor); // додаю подію клік а далі включаю функцію у цю подію

function onChangeColor() {
  // сама функція для операції
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor; // присвоюємо рядок методом textContent у спан
  console.log('Actual color is:', randomColor); //вивід у консоль
}
