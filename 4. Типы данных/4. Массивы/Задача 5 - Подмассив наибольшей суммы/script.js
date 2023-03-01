arr = [1, -2, 3, 4, -9, 6];
let fullSum = 0;

function getMaxSubSum(arr) {
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = 0; j < arr.length; j++) {
            sum += arr[j];
            fullSum = Math.max(fullSum, sum);        
        }
    }

    return fullSum;
}