console.log("hello world")

console.log("this is statement 2");

setTimeout(() => {
    console.log("this is statement 3");
}, 3000);

console.log("the end");

// this is called async nature of javascript because this not execute the code in line by line formate


// callback function this call another function to do work

let fun = ()=>{
    console.log("Abhishek Sharma");
}

let callback = (arg) =>{
    fun()
    console.log(arg);
}

let loadfunction = (src , callback) =>{
    let sc = document.createElement("script");
    sc.src  = src;
    sc.onload = callback("Aditya Sharma" , fun);
    document.head.append(sc)
    console.log("neha sharma");
}

loadfunction("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback);