//Write a program to sum the first 100 numbers using for loop
// Expected Output: 5050

var j = 0;
for(var i=1;i<=100;i++){
    console.log(j+=i)
}

// Generate the following series using for loop.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for(var i =0 ; i<=15 ; i++){
    console.log(i);
}

for(var i =10 ; i>1 ; i--){
    console.log(i);
}

for(var i =1; i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

for(var i =1; i<=20; i++){
    if(i%2!=0){
        console.log(i)
    }
}

// Write a program that takes user name. Convert and show the name in small 
// letters in Alert box.

var userName = prompt("Enter You Name");
alert("Welcome to the Page " + userName.toLowerCase());

//Initialize an array with color names (Array length should be 5). Log that array in your console
// HINT: push, pop, shift, unshift, splice

var colorNames = [];
colorNames.push("green","red","orange","purple","blue");
console.log(colorNames);
console.log(colorNames.length);

// Ask the user what color he / she wants to add to the beginning & add that color 
// to the beginning of the array.Display the updated array values in your browser
// using Alert(All the values should be listed)

var colors = ["green","red","orange","purple","blue"];
var addColors = prompt("Enter colors you want to add in begning:","yellow");
colors.unshift(addColors);
alert(colors);

// Ask the user what color he/she wants to add to the end & add that color to the 
// end of the array. Display the updated array in your browser using Alert 
// (All the values should be listed)

var colors = ["green","red","orange","purple","blue"];
var addColors = prompt("Enter colors you want to add in begning:","yellow");
colors.push(addColors);
alert(colors);

// Add two more color to the beginning of the array. Display the updated array
// in your browser using Alert (All the values should be listed)

var colors = ["green","red","orange","purple","blue"];
colors.unshift("yellow");
colors.unshift("white");
alert(colors);

// Delete the first color in the array. Display the updated array in your browser
//  using Alert (All the values should be listed)

var colors = ["green","red","orange","purple","blue"];
colors.pop()
alert(colors)

// Delete the last color in the array. Display the updated array in your browser 
// using Alert (All the values should be listed)

var colors = ["green","red","orange","purple","blue"];
colors.shift()
alert(colors)

// Ask the user at which index he/she wants to add a color & color name. Then add 
// the color to desired position/index. Display the updated array in your browser
//  using Alert (All the values should be listed)

var colors = ["green","red","orange","purple","blue"];
var UserIndex = prompt("Enter Index Number");
var UserColor = prompt("Enter your color","yellow");

colors.splice(UserIndex,0,UserColor);
alert(colors)

// Ask the user at which index he / she wants to delete color(s) & how many colors
// he / she wants to delete.Then remove the same number of color(s) from user - defined
// position / index. .Display the updated array in your browser using Alert
// (All the values should be listed)

var colors = ["green","red","orange","purple","blue"];
var userDelete = prompt("Enter number you want to delete: ");
var userIndex = prompt("Enter index number: ");
colors.splice(userIndex,userDelete,);
console.log(colors);


