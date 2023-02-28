let calculator = {
    read() {
        this.value1 = +prompt('Введите первое значение', 0);
        this.value2 = +prompt('Введите второе значение', 0);
    },
    sum() {
        return this.value1 + this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    }
}