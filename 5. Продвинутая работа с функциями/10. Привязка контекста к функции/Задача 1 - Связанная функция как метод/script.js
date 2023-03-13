function f() {
    alert( this ); // ?
  }
  
let user = {
    g: f.bind(null)
};
  
user.g();

// получим null
// в консоли object.window