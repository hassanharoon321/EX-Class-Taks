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

    (convertArrayToString==palindrome) ? alert("yes") : alert("no")
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

for(var i =0; i<=1; i++){
    for(var j=0; j<=1; j++){
    console.log(i,j,i);
    }
}






