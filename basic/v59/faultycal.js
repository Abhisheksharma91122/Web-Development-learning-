let a = Math.random();
console.log(a);

console.log("Enter your choice : ");
console.log("1.Addition");
console.log("2.Multiplication");
console.log("3.Substraction");
console.log("4.Division");
if (a < 0.2) {
    let choice = prompt("enter a choice : ");
    let number1 = prompt("Enter first number : ");
    let number2 = prompt("Enter first number : ");
    let c = Number(choice);
    let n1 = Number(number1);
    let n2 = Number(number2);
    switch (c) {
        case 1:
            console.log("The Addition of this two number is : ", n1 - n2);
            break;
        case 2:
            console.log("The Multiplication of this two number is : ", n1 + n2);
            break;
        case 3:
            console.log("The Substraction of this two number is : ", n1 / n2);
            break;
        case 4:
            console.log("The Division of this two number is : ", n1 ** n2);
            break;

        default:
            console.log("Your enter a wrong choice!");
            break;
    }

} else {
    let choice = prompt("enter a choice : ");
    let number1 = prompt("Enter first number : ");
    let number2 = prompt("Enter second number : ");
    let c = Number(choice);
    let n1 = Number(number1);
    let n2 = Number(number2);
    switch (c) {
        case 1:
            console.log("The Addition of this two number is : ", n1 + n2)
            break;
        case 2:
            console.log("The Multiplication of this two number is : ", n1 * n2)
            break;
        case 3:
            console.log("The Substraction of this two number is : ", n1 - n2)
            break;
        case 4:
            console.log("The Division of this two number is : ", n1 / n2)
            break;
        default:
            console.log("Your enter a wrong choice!")
            break;
    }
}