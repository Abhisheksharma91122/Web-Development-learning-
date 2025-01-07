let pass = "abhishek932@";


function passwordcheker(pass){
    if(pass.length < 8){
        console.log("please enter a long password");
        return;
    } else if(!/[A-Z]/.test(pass) && /[a-z]/.test(pass)){
        console.log("Please enter a password which contain both uppercase and lowercase element");
        return;
    } else if(!/[0-9]/.test(pass)){
        console.log("Your password must contain atlest one digit");
        return;
    } else {
        console.log("you password is strong!")
        return;
    }
}

passwordcheker(pass);