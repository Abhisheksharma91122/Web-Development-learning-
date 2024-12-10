let arr = [2,3,4,5];

// let newarr = [];


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
// }

let newarr = arr.map((e , index , array)=>{
    return e**2;
})


console.log(newarr);

const Greaterthantwo = (e)=>{
    if (e>2) {
        return true;
    }
    return false;
}

console.log(arr.filter(Greaterthantwo));


let arr2 = [1,2,3,4,5,6];

const red = (a,b) =>{
    return a+b;
}

console.log(arr2.reduce(red));