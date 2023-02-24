let value = 10;

mark: for (let i = 2; i < value; i++) { 
        for (let j = 2; j < i; j++) {
          if (i % j === 0) continue mark;
        }
        console.log(i);
      }