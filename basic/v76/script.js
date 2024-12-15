
// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(300);
//             return 300;
//         }, 3000);
//     })
// }

// simulate getting data for a server 
// async function getdata() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json();
//     console.log(data)
// }


// example of post request 
async function getdata(){

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data = await x.json();
    return data;
}

async function main() {

    console.log("this is statement 1");
    console.log("this is statement 2");
    console.log("loading data for server");
    let data = await getdata();
    console.log(data);
    // for loading data we using this approach for waiting for data
    // data.then((val) => {

    //     console.log("data processing");
    //     console.log("this is statement 3 or last task");
    // })

    console.log("data processing");
    console.log("this is statement 3 or last task");
}


main();

