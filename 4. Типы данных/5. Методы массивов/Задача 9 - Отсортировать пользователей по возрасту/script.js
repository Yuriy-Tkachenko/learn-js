let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(users) {
    return users.sort((a, b) => {
        if(a.age > b.age) {
            return 1;
        } else {
            return -1;
        }
    });
}

sortByAge(arr);