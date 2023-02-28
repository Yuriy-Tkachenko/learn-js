function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат?

  // Получим ошибку, т.к. this вызван не через точечный синтаксис.