let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

// keys возвращает не массив, чтобы keys возвращал массив необходимо заменить строку с кодом на let keys = Array.from(map.keys());