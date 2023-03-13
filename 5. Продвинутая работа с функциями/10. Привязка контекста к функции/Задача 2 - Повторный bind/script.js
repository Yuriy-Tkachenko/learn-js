function f() {
    alert(this.name);
  }
  
f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
f();

// Код выведет Вася, существующую привязку изменить нельзя