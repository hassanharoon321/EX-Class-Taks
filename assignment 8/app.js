// 1. Make a list of ES6 features that we have covered in our class with examples

//  1) Arrow Functions
const sum = (a, b) => {
    return a + b;
}

console.log(sum(2, 3))

//  2) Template Literals
let count = 0;
console.log(`Hello Countdown ${++count}`)

//  3) Object Destructuring

var studentsData = {
    id: 1,
    firstName: "Hassan",
    rollNumber: "EX-MS11",
    subject: "ES6"
}

const { id, firstName, rollNumber, subject } = studentsData

console.log(id)
console.log(firstName)
console.log(rollNumber)
console.log(subject)

//    4) Array Destructuring

var studentName = ["hassan", "haroon"];

const [firstName1, lastName1] = studentName

console.log(`${firstName1} ${lastName1}`);

//  object into Array Destructuring

var studentRecords = [
    { name: "hassan", classCode: 90909 },
    { name: "haroon", classCode: 20555 },
    { name: "khan", classCode: 89878 },
    { name: "sultan", classCode: 83789 },
];

const [id1, id2, id3, id4] = studentRecords;

console.log(id1)
console.log(id2)
console.log(id3)
console.log(id4)

//Object into Object Destructuring

var studentData = {
    firstname: "hassan",
    geoLocation: {
        lat: "23",
        long: "29"
    }
}

const {firstname,geoLocation:{lat}} = studentData

console.log(firstname)
console.log(geoLocation)


