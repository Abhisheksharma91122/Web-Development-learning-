
let arr = [1, 1, 2, 3, 4];


function nodouble(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            result.push(arr[i])
        } else {
            result.push(arr[i] * 2)
        }
        
    }
    return result;
}

console.log(nodouble(arr));
