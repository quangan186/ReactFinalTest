// 1
function adjacentElementsProduct(inputArray) {
    let maxValue = 0;
    for (let i=0; i < inputArray.length; i++){
        if (inputArray[i] * inputArray[i + 1] > maxValue){
            maxValue = inputArray[i] * inputArray[i + 1]
        }
    }
    return maxValue;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]))

// 2
// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    let t1 = 0
    let t2 = 0
    for (let i=0; i < a.length; i++){
        if (i % 2 === 0){
            t1 += a[i];
        } else{
            t2 += a[i];
        }
    }
    return `[${t1}, ${t2}]`
}

console.log(alternatingSums([60, 40, 55, 75, 64]))