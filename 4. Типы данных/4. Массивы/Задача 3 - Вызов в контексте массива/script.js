let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?

// массив из 2-х элементов и функции