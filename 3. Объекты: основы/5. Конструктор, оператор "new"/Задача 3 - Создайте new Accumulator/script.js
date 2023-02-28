function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Введите новое число, для добавления к текущему', 0);
    };
}

let accumulator = new Accumulator(2);