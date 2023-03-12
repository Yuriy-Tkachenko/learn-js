function sum(a) {
    let sum = a;
  
    function f(b) {
      sum += b;
      return f;
    }
  
    f.toString = function() {
      return sum;
    };
  
    return f;
}

console.log(sum(1)(2));