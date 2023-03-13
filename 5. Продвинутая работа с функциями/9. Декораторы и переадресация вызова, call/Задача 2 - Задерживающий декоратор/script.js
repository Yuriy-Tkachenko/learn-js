function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
let funcAft1000 = delay(alert, 1000);

funcAft1000("test");