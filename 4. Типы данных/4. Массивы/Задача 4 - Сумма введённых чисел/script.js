function sumInput() {
    let arr = [];

    while (true) {
        let value = prompt('Введите число', 0);
        if (value === "" || value === null || !isFinite(value)) break;
        arr.push(+value);
    }

    let sum = 0;
    for(let numb of arr) {
        sum += numb;
    }
    return sum;
}