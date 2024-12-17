console.log("Abhishek")


let a = prompt("Please enter first element : ");
let b = prompt("Please enter second element : ");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not allowed");
}
let sum = parseInt(a)+Number(b);

function main(){
    let x = 20;
    try {
        console.log("The sum is : ",sum+x);
        return true;
    } catch (error) {
        console.log(error +":" +"error aagaya bhai bhagoo")
        return false;
    }
    finally{
        console.log("All files are now close and db connection is begin closed");
    }
}

main();