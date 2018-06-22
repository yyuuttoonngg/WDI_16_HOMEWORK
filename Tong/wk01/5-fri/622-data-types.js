console.log ('data type exercises');
//https://gist.github.com/epoch/202871ec7120fa9e985f0acc07e64f62#file-js_data_types_revision_homework-md
//Data Types

// typeof 15
// // Prediction: number
// // Actual: number

// typeof 5.5
// // Prediction: number
// // Actual: number

// typeof NaN
// // Prediction: number
// // Actual: number

// typeof "hello"
// // Prediction: string
// // Actual: string

// typeof true
// // Prediction: boolean
// // Actual: boolean

console.log(typeof 1 != 2);
// typeof 1 != 2
// // Prediction: boolean  ----WRONG!!
// // Actual: true


// "hamburger" + "s"
// // Prediction:hamburgers
// // Actual:hamburgers

// "hamburgers" - "s"
// // Prediction: NaN
// // Actual: NaN

// "1" + "3"
// // Prediction:'13'
// // Actual: '13'

console.log("1" - "3");
// "1" - "3"
// // Prediction: NaN ----WRONG!!!
// // Actual: -2

// "johnny" + 5
// // Prediction: 'johnny5'
// // Actual:'johnny5'

// "johnny" - 5
// // Prediction:NaN
// // Actual:NaN

// 99 * "luftbaloons"
// // Prediction: NaN
// // Actual:NaN

// Arrays
var myArray = ['a','b','c','d','e'];
// Add an element to the back of an array.
myArray.push('f');
//Remove an element from the back of an array.
myArray.pop();
//Add an element to the front of an array.
myArray.unshift('z');
//Remove an element from the front of an array.
myArray.shift();
//Concatenates all the elements in an array into a string.
var myString = myArray.join('*');
console.log(myString);
//Separates the characters of a string into an array. This one is a string method.
var newArray = myString.split('*');
console.log(newArray);

var numbers = [2, 4, 6, 8];
numbers.pop();
numbers.push(10);
numbers.unshift(3);
console.log(numbers);
// my answer :
// numbers.pop()  [2,4,6]
// numbers.push(10)  [2,4,6,10]
// numbers.unshift(3)  [3,2,4,6,10]

var morse = ["dot", "pause", "dot"];
var moreMorse = morse.join(" dash ");
moreMorse.split(" ");
//my answer: ["dot", "dash", "pause", "dash","dot"]
console.log(moreMorse.split(" "));

var bands = [];
var beatles = ["Paul", "John", "George", "Pete"];
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"];
bands.push(beatles);
//answer [["Paul", "John", "George", "Pete"]]
bands.unshift(stones);
//answer: (2) [Array(5), Array(4)]
// 0: (5) ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// 1: (4) ["Paul", "John", "George", "Pete"]
bands[bands.length - 1].pop();
//answer:(2) [Array(5), Array(3)]
//0:(5) ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
//1:(3) ["Paul", "John", "George"]
bands[0].shift();
//answer:(2) [Array(4), Array(3)]
//0:(4) ["Mick", "Keith", "Ronnie", "Charlie"]
//1:(3) ["Paul", "John", "George"]

bands[1][3] = "Ringo"
// answer: (2) [Array(4), Array(4)]
//0:(4) ["Mick", "Keith", "Ronnie", "Charlie"]
//1:(4) ["Paul", "John", "George","Ringo"]

//Booleans and Comparison Operators
console.log(!true); //false
console.log(!false); //true

console.log('-') //just to seperate the exercises
console.log(true&&true) // true
console.log(true&&false) //false
console.log(false&&true) //false
console.log(false&&false) //false

console.log('-') //just to seperate the exercises
console.log(true||true) // true
console.log(true||false) //true
console.log(false||true) //true
console.log(false||false) //false

console.log('-') //just to seperate the exercises
console.log(3!=3); //false
console.log(1!=5) //true
console.log(2!='2') //false

console.log('-') //just to seperate the exercises
console.log(!true&&(true||true));//false
console.log(!true&&(true||false));//false
console.log(!false&&(false||true));//true
console.log(!false&&(false||false));//false

//Conditionals -- bouncer 
var age = function(a){
    var greeting;
    if (a>75){ 
        greeting = "Are you sure you want to be here?";
    } else if(a<21 && a>=18){
        greeting = "Come on in (but no drinking)!"
    } else if(a<18){
        greeting = "You're too young to be in here!";
    } else {
        greeting= "Come on in!";
    }
    console.log(greeting);
}
age(4);

// bouncer bonus part
// var greeting;
// var ID = prompt('if the customer as an ID');
// if (ID==='yes' || ID==='Yes' || ID==='YES'){    
//     var a = Number(prompt('whats the age on the ID'));
    
//     if (a>75){ 
//         greeting = "Are you sure you want to be here?";
//     } else if(a<21 && a>=18){
//         greeting = "Come on in (but no drinking)!"
//     } else if(a<18){
//         greeting = "You're too young to be in here!";
//     } else {
//         greeting= "Come on in!";
//     }
// } else{
//     greeting = "No ID, no entry.";
// }
// alert(greeting);

//Fizz-Buzz
var fizzBuzzArray = [];
for (i=1; i<=100; i++){
    if (i%15===0){
      fizzBuzzArray.push('Fizz Buzz');
    } else if (i%3 ===0){
        fizzBuzzArray.push('Fizz');
    } else if(i%5 === 0){
        fizzBuzzArray.push('Buzz');
    } else {
        fizzBuzzArray.push(i);
    }
}
console.log(fizzBuzzArray.join(', '));

//Fizz-Buzz bonos
var fizzBuzzFunction =function (i){
    if (i%15===0){
       console.log('Fizz Buzz');
      } else if (i%3 ===0){
        console.log('Fizz');
      } else if(i%5 === 0){
        console.log('Buzz');
      } else {
        console.log(i);
      }
}
fizzBuzzFunction(5);