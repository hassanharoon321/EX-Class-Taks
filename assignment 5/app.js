// 1.	Make a program that will filter out all the even numbers
// var numbers = [1, 3, 4, 6, 8, 9];
// HINT: Array.filter

function filterEvenNumbers() {
    var numbers = [1, 3, 4, 6, 8, 9];

    var newNumbers = [];
    numbers.filter(function (num) {
        if (num % 2 == 0) {
            newNumbers.push(num);
        }
    })
    var stringNumbers = newNumbers.join(',');
    alert(stringNumbers);
}



// 2.	Make a function that will check either the word is palindrome or not ?
//     Palindrome : A palindrome is a word, number, phrase, or other sequence 
//     of characters which reads the same backward as forward, such as madam or dad.

function palindrome() {
    var palindrome = "mom";
    var convertToArray = palindrome.split('');
    var arrayReverse = convertToArray.reverse();
    var convertArrayToString = arrayReverse.join('');

    (convertArrayToString == palindrome) ? alert("yes") : alert("no")
}


// 3.	Filter out students which has the substring ‘an.’ So it will return an array 
// consisting of those students names as per the matching criteria
// var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', ‘noor’];
// HINT: String.includes

function includesAN() {
    var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', 'noor'];
    var newStudents = [];
    students.map(function (student) {
        var includesAn = student.includes('an');
        newStudents.push(includesAn);
    })
    console.log(newStudents);
}

// You have a string “The quick brown fox jumps over the lazy dog”. Write a program 
// to count number of occurrences of word “the” in given string.
// HINT: String.split

function occurrenceOfThe() {

    var quoteAll = "The quick brown fox jumps over the lazy dog";
    var quote = quoteAll.toLowerCase()

    var quoteArray = quote.split(' ');

    quoteArray.forEach(function (quoteValues) {
        if (quoteValues == "the") {
            console.log(quoteValues);
        }
    })

}

// Write a two dimensional for loop program that will print. Get prompt from user & make 
// identity matrix accordingly
// eg; if user enters 3 then output matrix will be of 3 x 3
// 1 0 0
// 0 1 0
// 0 0 1

for (var i = 0; i <= 1; i++) {
    console.log(j);
    for (var j = 0; j <= 1; j++) {
        console.log(i);
    }
}

// Write a for loop program that will print
// 12345  *****
// 1234    ****
// 123      ***
// 12        **
// 1          *

for (var i = 1; i <= 5; i++)
{
    for (var j = 5; j >= i; j--)
    {
        console.log(j);
    }
    // Console.WriteLine();
    console.log();
    for (var k = i; k > 0; k--)
    {
        console.log(" ");
    }
}



// Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function,
//  number, string, and undefined.

function typeCheck() {
    function checkType(anyVariable) {
        return typeof anyVariable;
    }
    var someVariable = checkType("some value")
    console.log(someVariable);
}



// 8.	Make a javascript function, that should take arguments (2 operands + 1 operator) 
// & based on that perform these actions. 
// i) Sum 
// ii) Divide
// iii) Subtract
// iv) Multiply

// Note: Take values from user

function mathOperations() {
    function mathematicalOperations(num1, num2, operator) {
        if (operator === "+") {
            return num1 + num2;
        } else if (operator === "-") {
            return num1 - num2;
        } else if (operator === "*") {
            return num1 * num2;
        } else if (operator === "/") {
            return num1 / num2;
        }
    }

    var num1 = prompt("Enter num1 value")
    var num2 = prompt("Enter num2 value")
    var operator = prompt("Enter operator value")

    newNum1 = parseInt(num1);
    newNum2 = parseInt(num2);

    var result = mathematicalOperations(newNum1, newNum2, operator);
    console.log(result);

}

// We need to store studentData into a variable, which data type we will be 
// using to store that ? Could you make that variable & store these values 
// - firstName 
// - lastName
// - rollNumber
// - className
// - midtermScore
// - finalScore
// - hasClassRepresentativeRole

var studentData = {
    firstName: "hassan",
    lastName: "haroon",
    rollNumber: 587,
    className: "Intermediate",
    midtermScore: 0,
    finalScore: 0,
    hasClassRepresentativeRole: "no"
}

// 10.	After storing these above values, could you access these below properties using 
// javascript 
// - className
// - finalScore
// - hasClassRepresentativeRole

function objValues() {
    console.log(studentData.className)
    console.log(studentData.finalScore)
    console.log(studentData.hasClassRepresentativeRole);
}













