// const { createServer } = require('node:http');  this is not work because this is common js syntax 

// for modules means ecmascript es6 js 
// import http from "http"

// import { createServer } from "http";
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hello world </h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// importing modules using ecmascript modules 

// import {a,b,c} from "./mymodules.js"
// console.log(a,b,c)


// import abhi from "./mymodules.js"
// console.log(abhi)



// importing modules using common javascript 

// (function(exprots , require , module , __filename , __dirname){
//     // modules code actually live here
// });


const a = require("./mymodules2.js")
console.log(a,__dirname , __filename)
