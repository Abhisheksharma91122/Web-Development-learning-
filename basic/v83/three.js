let string = "abhishek";

console.log(string)


function reversestring(str){
    let newstring = "";
    for (let i = str.length -1; i >= 0 ; i--) {
        const word = str[i];
        newstring += word;
    }
    newstring = str + newstring;
    return newstring;
}

console.log(reversestring(string))
