let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        let numb = arr [i];

        if (numb < a || numb > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(arr, 1, 6)