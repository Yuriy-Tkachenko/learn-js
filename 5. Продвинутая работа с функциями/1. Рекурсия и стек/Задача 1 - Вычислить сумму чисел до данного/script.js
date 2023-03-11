// 1
function sumTo(n) {
    let sum = 0;

    for(let i = 0; i <= n.length; i++) {
        sum += i;
    }

    return sum;
}

// 2
function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

// 3

function sumTo(n) {
    return n * (n + 1) / 2;
}