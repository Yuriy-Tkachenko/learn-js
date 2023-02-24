it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });

  //   Все 3 теста написаны в 1 блоке it, из-за чего становится трудно понять в каком именно месте возникнет ошибка, 
  //   нужно разделить тест на 3 блока it.