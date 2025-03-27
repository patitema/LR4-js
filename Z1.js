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
  while(true) {
      const input = prompt("Введите целое число (отмена или пусто для завершения):");
      
      if(!input) break;
      
      const number = parseInt(input);
      if(!isNaN(number)) {
          numbers.push(number);
      } else {
          alert("Введите корректное целое число!");
      }
  }
  
  if(numbers.length === 0) {
      output.innerHTML = "<p>Массив пуст!</p>";
      return;
  }
  
  const count = () => numbers.length;
  
  const findMin = () => numbers.reduce((acc, val) => Math.min(acc, val));
  
  const findMax = () => numbers.reduce((acc, val) => Math.max(acc, val));
  
  const sum = () => numbers.reduce((acc, val) => acc + val, 0);
  
  const average = () => sum() / count();
  
  output.innerHTML = `
      <h2>Результаты анализа массива:</h2>
      <ul>
          <li>Количество элементов: ${count()}</li>
          <li>Минимальный элемент: ${findMin()}</li>
          <li>Максимальный элемент: ${findMax()}</li>
          <li>Сумма элементов: ${sum()}</li>
          <li>Среднее значение: ${average().toFixed(2)}</li>
      </ul>
      <p>Исходный массив: [${numbers.join(', ')}]</p>
  `;
}