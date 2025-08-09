// File: script.js
// Description: File to answer questions from Part 3 of assessment JSAT 2
// Author: Michael Deak
// Date: 10/08/2025
// Version: 1.00

// Q3.1 - Define strings
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Michael";
console.log(myString, anotherString, hello, myName);

// Q3.2 - Using utility functions
// Finding Length of myString
myString.length;
console.log(myString.length);
// Finding first character which is T
myString.charAt(0);
console.log(myString.charAt(0));
// Finding 11th character which is i
myString.charAt(13);
console.log(myString.charAt(13));

// Q3.3 - Use slice and substring
// Using slice to get "is a" from myString
myString.slice(5, 10);
console.log(myString.slice(5, 10));
// Using substring to get "the" from anotherString
anotherString.substring(6, 9);
console.log(anotherString.substring(6, 9));

// Q3.4 - Change myName string to upper case, to lower case
// Upper Case
myName.toUpperCase();
console.log(myName.toUpperCase());
// Lower Case
myName.toLowerCase();
console.log(myName.toLowerCase());
