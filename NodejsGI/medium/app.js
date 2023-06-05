// MEDIUM: Create a node application that will read all of the planets 
// in the solar system from a text file and print them to the console.

const fs = require('fs'); //declaring fs as a variable to require it in the code

const solar = fs.readFileSync('./data.txt', 'utf-8'); // declaring the variable solar and then using the fs.readfilesync method with the path to the data file and utf8
console.log(solar); //printing the contents of the data file to the console.
