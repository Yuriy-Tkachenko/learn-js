let user = {
    name: "John",
    years: 30
  };

let {name: name, age: years, isAdmin = false} = user;