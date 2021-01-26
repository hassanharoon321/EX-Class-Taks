// 1.	Make a program that will filter out all the even numbers

// var numbers = [1, 3, 4, 6, 8, 9];

// function checkEven(num) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }

// numbers.filter(checkEven);

//---------------------------------------------------------------------------------------

// 2.	If num =5; Solve these individual blocks separately ..
// ++num + num-- + --num + --num + num == 22 ?
// Note: In notepad, using your brain not using console :)

// Like:
// num=5
// 1) solving ++num:
// due to pre-increment -> 6
// 2) solving num--
// due to post decrement ->
// etc ….

// ++num + num-- + --num + --num + num == 22
//    6  +   6   +    4  +    3  +  3  == 22

//---------------------------------------------------------------------------------------

// 3.	var cabs = ["careem", "uber", "bykea"]
//  // Output required using above array using for loops:
// `careem and uber are good services`
// `careem and bykea are good services`
// `uber and careem are good services`
// `uber and bykea are good services`
// `bykea and careem are good services`
// `bykea and uber are good services

var cabs = ["careem", "uber", "bykea"];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (cabs[j] !== cabs[i]) {
            console.log(cabs[i] + " & " + cabs[j] + " are good services")
        }
    }

}

//---------------------------------------------------------------------------------------
// 4.	You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability.


// var data = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties'];
// var userInputCaseSensitive = "CAKE"
// var userInput = userInputCaseSensitive.toLowerCase();

// for(var i =0 ; i<=userInput.length;i++){
//     if(userInput === data[i]){
//         console.log("yes I've");
//         break;
//     }else{
//         console.log("no I don't")
//     }
// }

// data.filter((sweets) => {
//     if (sweets === userInput) {
//         console.log(userInput.indexOf());
//     } else {
//         console.log("No I don't");
//     }
// })

// var data = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties'];
// var userInputInsensitive = prompt("Enter Items")
// var userInput = userInputInsensitive.toLowerCase();
// console.log(data.includes(userInput));

// 5.	Write a program that takes user input. Convert and show the
// input in small letters.

// var userInput = prompt("Enter Chacter:");
// var lowerCase = userInput.toLocaleLowerCase();
// console.log(lowerCase);

// 6.	Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser. Output should be "Islamabad"
// Hint: replace()

// var travel = "Hyder to Islam";
// var travel2= travel.replace("Hyder to Islam","Hyderabad to Islamabad");
// console.log(travel2);

// 7.	Make following functions
// i) Sum 
// ii) Divide
// iii) Subtract
// iv) Multiply

// Note: Take values from user for passing into arguments (function calling)

// function sum(num1, num2) {
//     return console.log(num1 + num2);
// }
// function subract(num1, num2) {
//     return console.log(num1 - num2);
// } 
// function div(num1, num2) {
//     return console.log(num1 / num2);
// } 
// function mul(num1, num2) {
//     return console.log(num1 * num2);
// }

// sum(2, 3);
// subract(2, 3);
// div(2, 3);
// mul(2, 3);

