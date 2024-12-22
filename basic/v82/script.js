console.log("Advanced javascript");


async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
// this is called IIFE (immediately invoke function Experssion)



(async function main() {
    console.log(a1)
    // let a = await sleep();
    // console.log(a)
    // let b = await sleep();
    // console.log(b)


    // destructure 
    let [x , y, ...rest] = [1,2,3,4,5,6,7,8,9];
    console.log(x,y,rest)

    let obj = {
        a:1,
        b:2,
        c:3
    }

    let {a,b} = obj;
    console.log(a,b)

    let arr = [1,2,3];
    console.log(arr[0]+arr[1]+arr[2]);
    console.log(sum(...arr))

    // this is called as hoisting in javascript 
    var a1 = 5;
})()

// function sum(a,b,c){
//     return a+b+c;
// }

// hoisting is not done in const and let variable
const sum = async(a,b,c)=>{
    return a+b+c;
}