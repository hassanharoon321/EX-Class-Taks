//Ask User to enter name, then display the same name with welcome message on browser
// window

var userName = prompt("Enter your Name");
alert("Welcome to Page "+userName);


//Ask User to enter number, store that in a variable then perform different 
//arithmetic operations on that.

var userNumOne = prompt("Enter any Number");
var userNumTwo = prompt("Enter any Number");
var one = parseInt(userNumOne);
var two = parseInt(userNumTwo);

var add = one+two;
var sub = one-two;
var mult = one*two;
var div = one/two;
var mod = one%two;

alert("Addation of "+userNumOne+" + "+userNumTwo+ " = "+add)
alert("Subraction of "+userNumOne+" - "+userNumTwo+ " = "+sub)
alert("Multipliaction of "+userNumOne+" * "+userNumTwo+ " = "+mult)
alert("Division of "+userNumOne+" / "+userNumTwo+ " = "+div)
alert("Modulus of "+userNumOne+" % "+userNumTwo+ " = "+mod)


//Ask User to enter number, then print table of the provided user number on browser window.
// Hint: “\n”

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// .
// .
// .
// .
// .
// 2 x 10 = 20

var userInput = prompt("Enter the table");
var table = parseInt(userInput);

console.log(table + " " + " * " + "1" + " = " + table*1 + 
"\n" + table + " " + " * " + "2" + " = " + table*2 +
"\n" + table + " " + " * " + "3" + " = " + table*3 +
"\n" + table + " " + " * " + "4" + " = " + table*4 +
"\n" + table + " " + " * " + "5" + " = " + table*5 +
"\n" + table + " " + " * " + "6" + " = " + table*6 +
"\n" + table + " " + " * " + "7" + " = " + table*7 +
"\n" + table + " " + " * " + "8" + " = " + table*8 +
"\n" + table + " " + " * " + "9" + " = " + table*9 +
"\n" + table + " " + " * " + "10" + " = " + table*10
)

//Assignment 2
// 1.	Ask User to enter number, then check either the number is Even or Odd.
// Hint: 3 % 2 = 1(Remainder) (Modulus operator %)

var userInput = parseInt(prompt("Enter a number to check is Even or Odd"));

if (userInput % 2 === 0) {
    alert(userInput + " is an Even Number");
} else {
    alert(userInput + " is an Odd Number");
}


// Ask user to enter day in numbers, and show user which day it is Like(Moday, Tuesday etc...)
// Show error ‘Enter number within range etc…….’ if user enters an invalid number….

var userInput = parseInt(prompt("Enter a number 1 till 7"));

if (userInput === 1) {
    alert("Monday")
} else if (userInput === 2) {
    alert("Tuesday")
} else if (userInput === 3) {
    alert("Wednesday")
} else if (userInput === 4) {
    alert("Thursday")
} else if (userInput === 5) {
    alert("Friday")
} else if (userInput === 6) {
    alert("Saturday")
} else if (userInput === 7) {
    alert("Sunday")
} else {
    alert("Enter only 1 to 7 Number for days");
}

// Write a table of 9 with proper formatting using for loop

for (var i = 1; i <= 10; i++) {
    console.log("9 * " + i + " = " + 9 * i);
}

var nine = parseInt(prompt("Enter a number to print table: "))

for (var i = 1; i <= 10; i++) {
    document.write("<h1>" + nine + " * " + i + " = " + nine * i + "<br/>" + "</h1>");
}

// Make a program that show user a welcome message Welcome To Farenheit / Celcius Convertor.
// then ask user to select either they want to convert from farenhite to celcius
//  or celcius to farenhite ?
// then ask for the conversion number
// iii) calculate the result & show it in alert


var program = parseInt(prompt("Press 0 to convert farenhite to celcius or Press 1 to convert celcius to farenhite"));

if (program === 0) {
    var converter = parseInt(prompt("Enter value in Farenhite"));
    var celcius = (converter - 32) * 5 / 9;
    alert(celcius)
} else if (program === 1) {
    var converter = parseInt(prompt("Enter value in Celcius"));
    var celcius = (converter * 9 / 5) + 32;
    alert(celcius)
} else {
    alert("Press only 0 or 1 to Convert")
}

var userInput = parseInt(prompt("Enter a number 1 till 7"));

function days() {
    if (userInput === 1) {
        alert("Monday")
    } else if (userInput === 2) {
        alert("Tuesday")
    } else if (userInput === 3) {
        alert("Wednesday")
    } else if (userInput === 4) {
        alert("Thursday")
    } else if (userInput === 5) {
        alert("Friday")
    } else if (userInput === 6) {
        alert("Saturday")
    } else if (userInput === 7) {
        alert("Sunday")
    } else {
        alert("Enter only 1 to 7 Number for days");
    }
}

console.log(days())

if (days === false) {
    days()
}

if (userInput !== 1 && userInput !== 2 && userInput !== 3 && userInput !== 4 && userInput !== 5 && userInput !== 6 && userInput !== 7) {
    var userInput = parseInt(prompt("Enter a number 1 till 7"));
    if (userInput === 1) {
        alert("Monday")
    } else if (userInput === 2) {
        alert("Tuesday")
    } else if (userInput === 3) {
        alert("Wednesday")
    } else if (userInput === 4) {
        alert("Thursday")
    } else if (userInput === 5) {
        alert("Friday")
    } else if (userInput === 6) {
        alert("Saturday")
    } else if (userInput === 7) {
        alert("Sunday")
    } else {
        alert("error")
    }
}
