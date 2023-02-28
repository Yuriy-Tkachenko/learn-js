function Calculator(value1, value2) {
    this.read = function() {
        this.a = +prompt('Введите значение 1', 0);
        this.b = +prompt('Введите значение 2', 0);
    }
    this.sum = function() {
        return this.value1 + this.value2;
    }
    this.mul = function() {
        return this.value1 * this.value2;
    }
}

let calculator = new Calculator();