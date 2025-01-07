
async function multipleofarray(number){
    const multiplyafterdelay = (num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    };

    let promises = number.map((num) => multiplyafterdelay(num));
    return Promise.all(promises);
}


(async function main() {
    let arr = [1,2,3,4];
    let result = await multipleofarray(arr);
    console.log(result)
})()
