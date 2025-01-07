
async function addorder(product) {
    return new Promise((resolve, reject) => {
        let ran = Math.ceil(1+ Math.random() * 5);
        setTimeout(() => {
            resolve(`you order of ${product} is place`)
        }, ran * 1000);
    })
}


(async function(){
    let product = "collgate";
    let conformation = await addorder(product);
    console.log(conformation)
})()