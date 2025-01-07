let string = "you are good boy";


function checkvowel(string){
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if(element == "a" ||element == "e" ||element == "i" ||element == "o" ||element == "u" ||element == "A" ||element == "E" ||element == "I" ||element == "O" ||element == "U"){
            count++;
        }
    }
    console.log("the string has",count,"vowel");
}


checkvowel(string);