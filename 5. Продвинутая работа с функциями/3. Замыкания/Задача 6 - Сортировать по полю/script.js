let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(value) {
    return function (a, b) {
        if(a[value] > b[value]) {
            return 1;
        } else {
            return -1;
        };
    };
}

users.sort(byField('name'))