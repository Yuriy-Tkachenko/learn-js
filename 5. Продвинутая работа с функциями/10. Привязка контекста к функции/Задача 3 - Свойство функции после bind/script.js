function sayHi() {
    alert( this.name );
  }

sayHi.test = 5;
  
let bound = sayHi.bind({
    name: "Вася"
});
    
alert( bound.test ); // что выведет? почему?

// Результатом выполнения bind будет другое значение - name, при вызове bind.test - undefined