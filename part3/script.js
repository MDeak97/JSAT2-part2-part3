// File: script.js
// Description: File to answer questions from Part 3 of assessment JSAT 2
// Author: Michael Deak
// Date: 17/10/2025
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
// Finding 11th character which is t
myString.charAt(13);
console.log(myString.charAt(11));

// Q3.3 - Use slice and substring
// Using slice to get "is a" from myString
myString.slice(5, 10);
console.log(myString.slice(5, 10));
// Using substring to get "the" from anotherString
anotherString.substring(6, 9);
console.log(anotherString.substring(6, 9));

// Q3.4 - Change myName string to upper case and to lower case
// Upper Case
myName.toUpperCase();
console.log(myName.toUpperCase());
// Lower Case
myName.toLowerCase();
console.log(myName.toLowerCase());

// Q3.5 - Use various utility methods to create new strings
// Joining hello string and myName
hello.concat(myName);
console.log(hello.concat(myName));
// Removing spaces in anotherString
anotherString.trim();
console.log(anotherString.trim());
// Replacing "is a" with an empty space
myString.replace("is a");
console.log(myString.replace("is a", ""));
// Spliting the spaces in myString
myString.split([" "]);
console.log(myString.split([" "]));

// Q3.6 - See attached word document for algorithms on saving a text file and reading a text file.

// Q3.7 - Write a text file

// 1: Import file system module
const fs = require("fs");

// 2: Creating a string to save to a file
const textSave = "Saved into 'output.txt'";

// 3. Define file name
const fileName = "output.txt";

// 4. Writing the text to the file
fs.writeFile(fileName, textSave, function (error) {
  // Check if an error occured during writing
  if (error) {
    console.log("An error occured while writing the file");
  } else {
    // Confirm file was written successfully
    console.log("File '" + fileName + "' was saved succesffuly.");
  }
});

// Q3.8 - Read a text file

// 1. Read the contents of the file
fs.readFile(fileName, "utf8", function (error, data) {
  // 2. Check if there is an error
  if (error) {
    console.log("An error has occured");
    console.log(error);
  } else {
    // 3. Display what was read from the text file
    console.log("File contents.....");
    console.log(data);
  }
});
