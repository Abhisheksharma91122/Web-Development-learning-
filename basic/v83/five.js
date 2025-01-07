let array = [1,2,3,4,-5,4,-6]

function sumofarray(arr){
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element >= 0) {
           sum += element;  
        }
    }
    return sum;
}

console.log(sumofarray(array));