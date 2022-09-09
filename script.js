// console.log("This JS Assignment # 1")

//Task No # 1
// Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// let cityName = (prompt("Enter Your City Name").toLowerCase());
// if (cityName === "karachi") {
//     alert("Welcom To The City Of Lights");
// } else {
//     alert("Try Again")
// }

//Task No # 2

// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// let genderName = (prompt("Enter Your Gender (male) or (female)").toLowerCase());
// if (genderName === "male") {
//     alert("Good Morning Sir.");

// }
// if (genderName === "female") {
//     alert("Good Morning Ma'am.");

// } else {
//     alert("Try Again")
// }

// Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move no

// let colorName = (prompt("Enter Color Name To Know Traffic Signal Status").toLowerCase());
// switch (colorName) {
//     case "red": 
//         alert("Traffic light is " + colorName + " : " + " Must Stop");
        
//         break;
//     case "yello": 
//         alert("Traffic light is " + colorName + " : " + " Ready to move");
//         break;
    
//     case "green": 
//     alert("Traffic light is " + colorName + " : " + " Move now");

//     default:
//         alert("Type correcly")
//         break;
// }

// Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

// let fuel = 0.25;
// let remaningFuel = Number(prompt("Enter The Current Fuel Detail in Liter"))
// if (remaningFuel < fuel) {
//     alert("This " + remaningFuel +"liter is not enough Please refill the fuel in your car")
// } else {
//     alert("This "+ remaningFuel + "liter is enough for few miles")
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true")
// }   
        //Answer of (A) Is ture

//  var b = 82;
//  if (b++ === 83){
//  alert("given condition for variable b is true");
//  }
        //Answer of (B) is false

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
//  }
        //Answer of (C/1) is false
// if (c === 13){
// alert("condition 2 is true");
// }
        //Answer 0f (C/2) is false
// if (++c < 14){
// alert("condition 3 is true");
// }
        //Answer of (C/3) is ture
// if(c === 14){
// alert("condition 4 is true");
// }
        //Answer of (C/4) is false

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

        //Answer of (D) is ture

//  if (true){
//     alert("True");
// }
// if (false){
//     alert("False")
// }

// if("car"<"car") {
//     alert("car is smaller than cat");
// }

        //Answer of (F) is ture

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
        

// let subject1 = Number(prompt("Enter 'Physice' Marks"));
// let subject2 = Number(prompt("Enter 'Chemistry' Marks"));
// let subject3 = Number(prompt("Enter 'Mathematic' Marks"));
// let totalMarks = Number(prompt("Enter Total Marks To 'Get Your Result'"));
// let obtainMarks = subject1+subject2+subject3;
// let sumOfmarks = ((subject1+subject2+subject3)/3).toFixed(2);
// console.log(sumOfmarks);
// if (sumOfmarks>= 80 && sumOfmarks < 100 ) {
//     document.write(
//         "Total Marks : " + totalMarks <br> 
//         "Marks Obtained : " + obtainMarks <br>  
//         "Persentage : " + sumOfmarks + "%" <br>  
//         "Grade : A-One" <br>  
//         "Remarks : Weldon");

// }else if(sumOfmarks>= 70) {
//     alert("Weldone You Get 'A Grade'");
 
// }else if(sumOfmarks>= 60) {
//     alert("Weldone You Get 'B Grade'");
        
// }else if(sumOfmarks< 60) {
//     alert("'Fail' Need Hard Work");
// } else {
//     alert("check your code")
// }

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let secratNumner = 7;
// let gussNumber = Number(prompt("Guess Secrat (Range 1-10)"));

// if (gussNumber === secratNumner) {
//     alert("Bingo! Correct answer");
// } else if (secratNumner === ++gussNumber) {
//     alert("Close enough to the correct answer");
// }else{
//     alert("Sorry Try Again OR Invalide Number")
// }


// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3

// let checkNumber = Number(prompt("Enter Number to Check Division By 3"));
// if ((checkNumber%3) === 0){
//     alert("Fully Divide");
// }else{
//     alert("Not fully divide ")
// }

// Write a program that checks whether the given input is an
// even number or an odd number

// let oddEven = Number(prompt("Enter Number To Check The Number is Odd OR Even"));
// if ((oddEven % 2) === 0) {
//     alert(oddEven + " Is Even Number");
// } else {
//     alert(oddEven + " Is Odd Number");
// }

// Write a program that takes temperature as input and 
// shows a message based on following criteria

// let temparature = Number(prompt("Enter Temparature In ℃ "));
// if (temparature >= 40) {
//     alert("It is too hot outside");
// }else if (temparature >= 30) {
//     alert("The Weather today is Normal");
// }else if (temparature >= 20) {
//     alert("Today's Weather is Cool");
// }else if (temparature >= 10) {
//     alert("OMG! Today's weather is so Cool");
// }else{
//     alert("invalid input")
// }

// Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:

// const operators = prompt("Enter Operator for Calculation (eithr +, -, *, /, %)");

// let num1 = Number(prompt("First Number"));
// let num2 = Number(prompt("Second Number"));

// if (operators == '+') {
//     alert("Answer = " + (num1 + num2));
// }else if (operators == '-') {
//     alert("Answer = " + (num1 - num2));
// }else if (operators == '*') {
//     alert("Answer = " + (num1 * num2));
// }else if (operators == '/') {
//     alert("Answer = " + (num1 / num2));
// }else if (operators == '%') {
//     alert("Answer = " + (num1 % num2) + " = (Remender)")
// }else{
//     alert("Invalid")
// }


// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);