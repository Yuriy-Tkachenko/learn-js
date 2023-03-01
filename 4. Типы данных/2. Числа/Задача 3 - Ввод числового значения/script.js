function readNumber() {
    let value;

    do {
        value = prompt('Введите числовое значение', 0);
    } while (!isFinite(value));

    if(value === null || value === '') {
        alert(prompt('Введенное значение не является числом'));
    }

    alert(`Введенное число ${value}`)
};