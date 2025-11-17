// Завдання 3
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const input = document.querySelector('#name-input'); // беремо в роботу інпут
const output = document.querySelector('#name-output'); // беремо в роботу спан-output

input.addEventListener('input', () => {
  const cleanedString = input.value.trim(); //зміна для порожнього поля, трім метод для пробілів. Прибирає лише з початку та кінця

  if (cleanedString === '') {
    // команда для порожнього рядка, плюс пробіли
    output.textContent = 'Anonymous';
  } else {
    // тут будь яке інше значення переводить цей рядок в output
    output.textContent = cleanedString;
  }
});
