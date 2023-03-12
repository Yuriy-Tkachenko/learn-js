function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?

/* Для каждого вызова makeCounter() создаётся новое лексическое окружение функции, 
со своим собственным count, т.о. функции counter – независимы, результат counter - 0 */