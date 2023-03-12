function inBetween(a, b) {
    return function(c) {
        return( c >= a && c <= b );
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( arr.filter(inBetween(4, 8)) );

function inArray(arr) {
    return function(c) {
      return arr.includes(c);
    };
  }

console.log( arr.filter(inArray([1, 2, 10])) );