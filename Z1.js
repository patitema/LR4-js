function first() {
  const output = document.getElementById('output');
  output.style.display = 'flex';
  output.innerHTML = '';
  
  let names = [];
  
  while (true) {
      const input = prompt("Введите фамилию и имя (пустой ввод для завершения):");
      if (!input) break;
      names.push(input.trim());
  }
  if (names.length > 0){

    names.sort();

    let list = `<h2>Список имён</h2
    <ul>`;
    for (let i = 0; i < names.length; i++) {
        list += `<li>${names[i]}</li>`;}

    list += '</ul>';
  
    output.innerHTML =  list
  } else{
    output.innerHTML = '<h2>Нет данных</h2>';
  }
}

function second() {
  const output = document.getElementById('output');
  output.style.display = 'flex';
  output.innerHTML = '';
  
  const array = [1, 58, 8, 6, 2, 22, 108];
  
  array.sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
  });

  if (array.length > 0){

    let list = `
    <h2>Список по убыванию</h2>
    <ul>`

    for(let i = 0; i< array.length; i++){
      list += `<li>${array[i]}</li>`
    }

    list += '</ul>'

    output.innerHTML = list;

  } else{
    output.innerHTML = '<h2>Нет данных</h2>'
  }
}

function third() {
  const output = document.getElementById('output');
  output.style.display = 'flex';
  output.innerHTML = '';
  
  const numbers = [];
  let input;
  
  while ((input = prompt("Введите число (отмена/пусто - стоп)")) !== null) {
      if (input.trim() === "") break;
      const num = Number(input);
      if (!isNaN(num)) numbers.push(num);
  }
  
  if (!numbers.length) {
      output.innerHTML = "<p>Нет чисел!</p>";
      return;
  }
  
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = sum / numbers.length;
  
  output.innerHTML = `
      <h2>Результат:</h2>
      <ul>
          <li><p>Количество: ${numbers.length}</p></li>
          <li><p>Минимум: ${min}</p></li>
          <li><p>Максимум: ${max}</p></li>
          <li><p>Сумма: ${sum}</p></li>
          <li><p>Среднее: ${avg.toFixed(2)}</p></li>
      </ul>
      <br>
      <p>Числа: ${numbers.join(', ')}</p>
  `;
}