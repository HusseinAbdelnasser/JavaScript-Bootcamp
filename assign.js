/* --- Assignments   001---009   */


/*

// Solution one
let header = document.createElement("h1");

let text = document.createTextNode("Elzero");

header.appendChild(text);

document.body.append(header);

header.style.cssText = "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";

// Solution two

document.write("<h1> Elzero </h1>");

document.querySelector("h1").style.color = "blue";

*/

/*

console.log(" %cElzero  %cWeb  %cSchool",
 "color: red; font-size: 40px" ,
 "color: green; font-size: 40px" ,
  "color: white; font-size: 40px; background-color: blue; font-weight: bold;"
)

*/

/*
console.table(["Elzero", "Ahmed", "Sameh" , "Gamal" , "Aya"]);
*/

/*
console.group('Group 1');
console.log('Message 1');
console.log('Message 2');
console.group(' Child Group ');
console.log('Message 1');
console.log('Message 2');
console.group('Grand Child Group ');
console.log('Message 1');
console.log('Message 2');
console.groupEnd();

console.group('Group 2');
console.log('Message 1');
console.log('Message 2');
*/

 
/* --- Assignments   010---017  Data Types And Variables */

/*
var numberOne = "10";
var numberTwo = "20";

console.log(numberOne + numberTwo);
console.log(typeof numberOne + " " +typeof numberTwo);
console.log(`${numberOne}${numberTwo}`);
console.log(`${typeof numberOne}${typeof numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}
`);
*/

/*
console.log("I'm In \n\\\\ \nLove \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\ \"\"\" \\  \"\"\" \n \"\" Javascript \"\" ");
*/

/*
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
*/


/* --- Assignments   018---022  Operators */


/*
// Replace ? With Arithmetic Operators
console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
*/

/*
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(num * num / num + num); // 6

// Soultion Four
console.log((num * num * num / num ) - num); // 6

// Solution Five
console.log(num * num - num); // 6

// Solution Six
console.log((num * num * num * num / (num * num)) - num); // 6
*/

/*
let num = "10";

// Solution One
console.log( +num + +num); // 20

// Solution Two
console.log(+num - +num + +num + +num); // 20

// Solution Three
console.log((+num * +num / +num) + +num); // 20

// Solution Four
console.log(+num + +num + +num - +num); // 20
*/


/* --- Assignments   023---026 Numbers */

/*
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.round(99999.9)); // 100000
console.log(Math.round(100000.1)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.floor(100000.2)); // 100000
console.log(Math.trunc(100000.5)); // 100000
console.log(Math.min(200000,300000,100000)); // 100000
console.log(Math.max(999,10000,100000)); // 100000
console.log(100 * 100 * 10); // 100000
console.log(100 * 1000); // 100000
console.log(99999 + 1); // 100000
*/

/*
console.log(-(Number.MIN_SAFE_INTEGER));

console.log(Number.MAX_SAFE_INTEGER);
*/

/*
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57

*/

/*
let num = 10;

console.log(Number.isInteger(num / (num * num / (num + num)))); // 2
*/

/*
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10
*/

/*
console.log(Math.floor(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4
*/



/* --- Assignments   027---030 Numbers */

/*
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee
*/

/*
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.charAt(3).startsWith(letterE)); // True
console.log(word.endsWith("o")); // True

*/


/* --- Assignments   031---032 Comparison && Logical Operators */

/*
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 && 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 === typeof +"-40"); // true
console.log(typeof 10 === typeof -"-40"); // true
console.log(typeof "10" !== typeof 10); // true
console.log(typeof 20 !== typeof false); // true
*/

/*
let num1 = 10;
let num2 = 20;


console.log(num1 != num2); // true
console.log(num2 > num1); // true
console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(typeof num1 == typeof num2); // true
console.log(num1 !== num2 ); // true
*/

/*
let a = 20;
let b = 30;
let c = 10;
console.log(a != b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true
*/


/* --- Assignments   033---037  If Condition  */

/*
// Test Case 1
let numOne = 9; // "009"

if (numOne < 10) {
  console.log(`00${numOne}`);
}

// Test Case 2
let numTwo = 20; // "020"

if (numTwo > 10 && numTwo < 100 ){
  console.log(`0${numTwo}`);
}
// Test Case 3
let numThree = 110; // "110"

if (numThree >= 100){
  console.log(numThree);
}
*/

/*
let num1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

if ( num1 == str ) {
  console.log(`${num1} Is The Same Value As ${str}`);
}

if (num1 !== str) {
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type `);
}

if(num1 !== str2) {
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (str !== str2 ) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
*/

/*
let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if (num3 > num1 && num3 !== num2) {
  console.log(`${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`);
} else if (num3 > num1 && num3 == num2 && num3 !== num2){
  console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`);
} else if (num3 !== num1 && num3 !== num2) {
  console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
}
*/


/* --- Assignments   040---047  Array   */

/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num-num,num));  // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/

/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
*/

/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(arrOne.concat(arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
*/

/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2,6).toUpperCase()); // ZERO.
console.log(words.pop()[0].slice(words.length).toUpperCase()); // ZERO
*/

/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

console.log(haystack.includes(needle));
console.log(haystack[1].includes(needle));
console.log(haystack.slice(1, 2).includes(needle));
console.log(haystack.splice(1, 1).includes(needle));
if (haystack.includes(needle) === true) {
  console.log("Found");
}
*/

/*
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2);

// Your Code Here

console.log(allArrs.sort().slice(arr2.length).join("").toLowerCase()); // fxy
*/


/* --- Assignments   048---053  Loop   */

/*
let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100

for(let i = start; i <= end ;  i += start){
  if(i === exclude){
    continue;
  }
  console.log(i);
}
*/

/*
let start = 10;
let end = 0;
let stop = 3;

// Output
10
09
08
07
06
05
04
03

for (let i = start; i > end; i--){
  if ( i < stop){
    break;
  }
 if(i >= start){
  console.log(i);
 } else if(i < start){
  console.log(`${end}${i}`)
 }

}
*/

/*
let start = 1;
let end = 6;
let breaker = 2;
let nestedEnd = end - breaker;
let stop = end / breaker;

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4



for(let i = start; i <= end; i++){
  console.log(i);
  for(let j = breaker; j <= nestedEnd; j++ ){
    if(j === stop){
      continue;
    }
    console.log(`- ${j}`)
  }
}
*/

/*
let index = 10;
let jump = 2;
let end = index - jump -4;

//for (let i = index; i >= end; i-=jump ){
  //console.log(i);
//}

let i = index;
for (;;) {
  console.log(i);
  i-=jump;
  i >= end;
}
*/

/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

for(let i =0; i< friends.length; i++){
  if(!`${friends[i]}`.startsWith("A")){
    console.log(`${i + 1} => ${friends[i]}`);
  }
}

*/

/*
let start = 0;
let swappedName = "elZerO";
let arr =[]

// Output
"ELzERo"

for (let i = start; i < swappedName.length; i++) {
  swappedName[i] === swappedName[i].toUpperCase()
    ? arr.push(swappedName[i].toLowerCase())
    : arr.push(swappedName[i].toUpperCase());
}
console.log(arr.join(""));
*/

/*
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4]; 

// Output
2
3
4

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  } else if (mix[i] === mix[+false]) {
    continue;
  }
  console.log(mix[i]);
}
*/

/*
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let showCount = 3;

document.write(`<div>We Have ${showCount} Admins</div>`);
document.write(`<hr>`);

for(let i = 0; i<showCount; i++){
  document.write(`<div>`);
  document.write(`<h5>The Admin For Team [${i + 1}] Is ${myAdmins[i]} </h5>`);
  document.write(`<h3> Team Members: </h3>`);
  for(let j = 0; j < myEmployees.length; j++){
    
    if(`${myEmployees[j].charAt(0)}` === `${myAdmins[i].charAt(0)}`){
      document.write(`<p> ${j + 1} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`<hr>`);
  document.write(`</div>`);      
}
*/


/*  --- Assignments  057---071  Function And Parameters And Scope */

/*
function sayHello(theName, theGender) {
  if(theGender === "Male"){
    console.log(`Hello Mr ${theName}`);
  } else if(theGender === "Female"){
    console.log(`Hello Miss ${theName}`);
  }else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

/*
function calculate(firstNum  , secondNum, operation) {
  if( secondNum === undefined){
    console.log(`Second Number Not Found`);
  } else if(operation === "add"){
    console.log(`${firstNum + secondNum}`);
  } else if(operation === "subtract"){
    console.log(`${firstNum - secondNum}`);
  }else if(operation === "multiply"){
    console.log(`${firstNum * secondNum}`);
  } else {
    console.log(`${firstNum + secondNum}`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
*/

/*
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100){
    console.log(`Your age is ${theAge * 12} Months
    Your age is ${theAge * (365 / 7} Weeks
    Your age is ${theAge * 365} Days
    Your age is ${theAge * (356 * 24) } Hours
    Your age is ${theAge * (356 * 24 * 60)} Minutes
    Your age is ${theAge * (356 * 24 * 60 * 60)} Seconds`);
  } else {
    console.log(`Age Out Of Range`)
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
*/

/*
function checkStatus(a, b, c) {
  let arr = [];
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      user = arr[i];
    } else if (typeof arr[i] === "number") {
      num = arr[i];
    } else {
      bool = arr[i];
      if (bool === true) {
        bool = `Availabel`;
      } else {
        bool = `Not Availabel`;
      }
    }
  }

  console.log(user, num, bool);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

/*
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for(let i = startYear; i<= endYear; i++){
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
*/

/*
function multiply(...num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "string") {
      continue;
    } else {
      // result *= Math.trunc(num[i]);
      result = result * Math.trunc(num[i]);
    }
  }
  console.log(result);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/


/*
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.slice(0,7)}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  
  function ageWithMessage(zAge) {
    return ` ${zAge.slice(0,2)}`
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  
  function countryTwoLetters(zCountry) {
    return ` ${zCountry.toUpperCase().slice(0,2)}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

*/

/*
 //function itsMe() {
  //return `Iam A Normal Function`;
//}

//console.log(itsMe()); // Iam A Normal Function

let itsMe = () => `Iam A arrow Function`;

console.log(itsMe()); // Iam A arrow Function
*/

/*
//function urlCreate(protocol, web, tld) {
  //return `${protocol}://www.${web}.${tld}`;
//}

//console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`
console.log(urlCreate("https", "elzero", "org"));
*/

/*
function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      // result += parseInt(data[i]);
      result += parseInt(data[i]);
      // return parseInt(data[i]);
    }
  }
  if (result === 0) {
    return "All Is Strings";
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/


/*  --- Assignments  071---078  Function And Parameters And Scope */

/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let letters = mix.map(function(ele){
  return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function(acc,currunt){
  return `${acc}${currunt}`;
})
console.log(letters)
// Elzero
*/

/*
let myString = "EElllzzzzzzzeroo";
let arr = myString.split("");
remove = new Set(arr)

console.log(remove);

// Elzero

*/

/*
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray
.reduce(function(acc,currunt){
  return `${acc}${currunt}`
})
console.log(newArr)
// Elzero
*/

/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let finalString = numsAndStrings
.filter(function(ele){
 return !isNaN(parseInt(ele)) ? ele : "";
})
.map(function(ele){
  return -ele;
})
console.log(finalString)
// [-1, -10, 10, 20, -5, -3]
*/

/*
let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(function(accumulator,currunt, index, array){
  console.log(`Acc => ${accumulator}`);
  console.log(`Current Element => ${currunt}`);
  console.log("-".repeat(10));
  return currunt % 2 !== 0 ? accumulator + currunt : accumulator * currunt;
},1)
console.log(newNums);

// 500
*/

/*
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
.split("")
.filter(function(ele){
  return ele !== "," ;
})
.map(function(ele){
  return isNaN(parseInt(ele)) ? ele : "";
})
.reduce(function(acc,currunt){
  return `${acc}${currunt}`
})


console.log(solution); // Elzero Web School
*/



/*  --- Assignments  079---085  Oject AND Methods */

/*
// Create Your Object Here

let member = {
  theName: "Elzero",
  age: 38,
  country:"Egypt",
  fullDetails: function(){
     return `My Name Is ${this.theName}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
}


console.log(member.theName); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
*/

/*
// Method One
// Create Your Object Here

let objMethodOne = {
  property: "Method One",
}

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = {
  "property": "Method Two",
}

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

let myVar = "property";

let objMethodThree = {
  [myVar]: "Method Three",
}

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

let objMethodFour = new Object({
  property: "Method Four",
});

console.log(objMethodFour.property); // "Method Four"
*/

/*
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject = Object.assign({},{a},threeNums,twoNums);

console.log(finalObject);


  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6


*/

/*
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
console.log(Object.keys(myFavGames)); // Convert Object To Array

let objectLength = Object.keys(myFavGames).length;
// console.log(objectLength);
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}


// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"

*/

/*
let num = document.querySelector("[type='number']");
let txt = document.querySelector("[type='text']");
let sel = document.getElementsByName("type")[0];
let sub = document.querySelector("[type='submit']");
let rmv = document.querySelector("[value='Remove']");
let res = document.getElementsByClassName("results")[0];
console.log(res);

sub.onclick = function (e) {
  numValue = num.value;
  txtValue = txt.value;
  selValue = sel.value;
  res.innerHTML = ``;
  res.setAttribute("style", "display: flex; gap: 10px; flex-wrap: wrap;");
  for (i = 0; i < numValue; i++) {
    if (selValue === "Div") {
      let myDiv = document.createElement("div");
      let myDivTxt = document.createTextNode(txtValue);
      myDiv.setAttribute(
        "style",
        "background-color: red; padding:20px 30px; flex-basis: 200px;"
      );
      myDiv.appendChild(myDivTxt);
      myDiv.id = `id-${i}`;
      myDiv.className = `box`;
      myDiv.title = "Element";
      res.appendChild(myDiv);
    } else {
      let mySec = document.createElement("section");
      let mySecTxt = document.createTextNode(txtValue);
      mySecTxt.style = "background-color:red;";
      mySec.appendChild(mySecTxt);
      mySec.id = `id-${i}`;
      mySec.className = `box`;
      mySec.title = "Element";
      res.appendChild(mySec);
    }
  }

  e.preventDefault();
};

*/

/* -- Assignments---- 086---094   DOM ------ */

/*
let element1 = document.getElementById("elzero");
let element2 = document.getElementsByTagName("div");
let element3 = document.getElementsByClassName("element");
let element4 = document.querySelector(".element");
let element5 = document.querySelectorAll(".element");
let element6 = document.querySelector("#elzero");
let element7 = document.querySelectorAll("#elzero");
let element8 = document.querySelector("[name='js']");
let element9 = document.querySelectorAll("[name='js']");
let element10 = document.querySelector("[class='element']");
let element11 = document.querySelectorAll("[class='element']");
let element12 = document.getElementsByTagName("div")[0];
let element13 = document.body;

console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);
console.log(element5);
console.log(element6);
console.log(element7);
console.log(element8);
console.log(element9);
console.log(element10);
console.log(element11);
console.log(element12);
console.log(element13);
*/

/*
let myImage = document.querySelectorAll("div img");


for(let i = 0; i< myImage.length; i++){
  myImage[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
  myImage[i].setAttribute("alt","elzero");
}
*/

/*
let myNumber = document.querySelector("[type = 'number']");
let myResult = document.querySelector("[class = 'result']");

let myExhange = 15.6;


document.forms[0].onclick = function(e){

  let myFinalResult = myNumber.value * myExhange;
  myResult.innerHTML = `${myNumber.value} Dollar cost ${myFinalResult.toFixed(2)} Egyption Pound ` ;
  console.log(myResult);
  //console.log(myNumber.value * 15.6);
}
*/

/*
let one = document.querySelector(".one");
let two = document.querySelector(".two");

one.innerHTML = "<div class=one title=one>One</div>";
two.innerHTML = "<div class=two title=two>Two</div>";
*/

/*
let myImage = document.querySelectorAll("img");

for(let i = 0; i<myImage.length; i++){
  if(myImage[i].hasAttribute("alt")){
    myImage[i].setAttribute("alt", "old");
  } else {
    myImage[i].setAttribute("alt", "Elzero New");
  }
}
*/



/* -- Assignments   DOM ------ */

/*
console.log(document.links[2]);
console.log(document.getElementsByTagName('a')[2]);
console.log(document.getElementsByClassName('open')[1]);
console.log(document.getElementsByTagName('a').classList.contains("open"));
*/

/*
document.getElementById("par").remove();

let ourELement = document.querySelector(".our-element");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let text1 = document.createTextNode("start");
let text2 = document.createTextNode("end");

div1.appendChild(text1);
div2.appendChild(text2);

div1.className= "start";
div1.setAttribute("title", "start element");
div1.setAttribute("data-value","start");

div2.className= "end";
div2.setAttribute("title", "end element");
div2.setAttribute("data-value", "end");


ourELement.before(div1);
ourELement.after(div2);
*/

/*
let child = document.querySelector("#nodes");
console.log(nodes.childNodes);
*/

/*

let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let classList = document.querySelector(".classes-list") ;
let classPlace = document.querySelector(".class-place");
let curruntElement = document.querySelector(".element");

function classL(element, result) {
	if (element.classList.value === "") {
		result.innerHTML = "No Classes To Show";
	} else {
		element.classList.value
			.split(" ") // classes => array
			.sort() // sort by alphabets
			// map to access every element in the array
			.map(a => {
				//creating <span> to append the classes[array element] in it
				let span = document.createElement("span");
				//including every array element in a span by adding [a=> the parameter]
				span.innerHTML = a;
				//append span to [result] to launch it on DOM
				result.appendChild(span);
			});
	}
}


addClass.onblur = function(e){
   
    let wordsAdd = addClass.value.trim().toLowerCase().split(" ");
    for(let i = 0; i< wordsAdd.length; i++){
      curruntElement.classList.add(wordsAdd[i]);
      classPlace.innerHTML = addClass.value;
    }
   addClass.value= "";
   classPlace.innerHTML = "";
}

removeClass.onblur = function(e){
  if(removeClass.value === classPlace.value){
    classPlace.value.remove
  }
}
*/

/*
let myDiv = document.querySelector(".children");

console.log(myDiv.childNodes[4]);
console.log(myDiv.lastChild);
*/


/* -- Assignments---- 102---110   BOM ------ */

/*
let div = document.querySelector(".welcome");
let close = document.querySelector(".welcome span");


setTimeout(function(){
  window.onload = div.style.display = "block";
}, 5000)


close.onclick = function(){
  div.style.display = "none";
}
*/

/*
let div = document.querySelector("div");

function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
let counter = setInterval(countdown, 1000);
*/

/*
let div = document.querySelector("div");

function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "0") {
    window.open("https://elzero.org/");
    clearInterval(counter);
  }
}
let counter = setInterval(countdown, 1000);
*/

/*
let div = document.querySelector("div");

function countdown() {
  div.innerHTML--;
  if (div.innerHTML === "0") {
    window.open("https://elzero.org/", "_blank", "width=400,height=400,left=200,top=10");
    clearInterval(counter);
  }
}
let counter = setInterval(countdown, 1000);
*/


/* -- Assignments---- 115---122   Destructuring ------ */

/*
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

[a, , , , e] = myNumbers

console.log(a * e); // 5
*/

/*
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

[a, b, c, [d, e, [f, g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
*/

/*
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

[, a, b, c = arr1[0]] = arr3

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
*/

/*
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here

const {age:a, working:w, country:c, hobbies:[h1, , h3]} = member

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
*/

/*
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

console.log(game.releases); //test
// Write Your Destructuring Assignment/s Here
({ title: t, developer: d, releases } = game);
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style
console.log(`And I Love ${d} Games`);
// And I Love Falcom Games
//
//saving the properties of the object in a variable to using it any where
let obj = Object.keys(releases);
console.log(obj); //test
const [o, a, or] = obj;
//
// saving the values of the object properties in a variable
let obj2 = Object.values(releases);
console.log(obj2); // test
const [[u, j], { US: u_price, JAP: j_price }] = obj2;
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan
//

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim
//
console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD
//
console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD
//
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
*/

/*
let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

const [f1, f2, f3] = myFriends;

let friendsDetails = function(friendObj){
  const {title:t, age:a , available:av ,skills:[sk1, sk2] } = friendObj;

  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not Avaiable");
  console.log(sk2);
}

if(chosen === 1){friendsDetails(f1)};
if(chosen === 2){friendsDetails(f2)};
if(chosen === 3){friendsDetails(f3)};

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
*/


/* -- Assignments---- 123---133  Map And Set ------ */

/*
let setOfNumbers = new Set().add(10);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers); // Set(3){10, 20, 2}

console.log(Array.from(setOfNumbers)[2]); // 2
*/

/*

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(Array.from(new Set(myFriends)).sort());

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

*/

/*

// Convert Object to Map

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};


let myMap = new Map();

myMap.set("username", "Osama");
myMap.set("role", "Admin");
myMap.set("country", "Egypt");
console.log(myMap);

console.log(myMap.size);

console.log(myMap.has("role"));

// Needed Output
//Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true

*/

/*
let theNumber = 100020003000;

// Solution 1
console.log(+[...new Set(theNumber.toString())].sort().join(""));

// Solution 2
console.log(+(theNumber.toString().split("").filter((e) => e > 0).join("")));

// Solution 3
console.log(Number(Array.from(new Set(theNumber.toString())).sort().join("")));

// Needed Output
123

*/

/*
let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split("").map((e) => e));
console.log(theName.split("").filter((e) => e));
console.log(Array.from(theName.split("").reduce((acc,currunt) => `${acc}${currunt}`)));


// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']

*/

/*

let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];

let sortedChars1 = chars1.sort() // [10, 15, 6, 'A', 'B', 'C', 'D', 'E']

let newChars1 = sortedChars1.copyWithin(0, sortedChars1.filter((e) => typeof e === "number").length, 6);
console.log(newChars1);  // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']



let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let sortedChars2 = chars2.sort();  // [10, 15, 20, 6, 'A', 'B', 'C', 'D', 'E']

let newChars2 = sortedChars2.copyWithin(0, sortedChars2.filter((e) => typeof e === "number").length, 8);
console.log(newChars2);   //['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']



let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];


let newChars3 = chars3.copyWithin(chars3.filter((e) => typeof e === "number").length); 
console.log(newChars3);  //["Z", "Y", "Z", "Y", "A", "D", "E"]

*/

/*
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);  //[1, 2, 3, 4, 5, 6]

numsOne.push(...numsTwo);
console.log(numsOne);

console.log(numsOne.concat(numsTwo));
*/

/*
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];


console.log(+[...n1.pop().toString().length.toString(),n2.pop()].join(""));

210

*/



/* -- Assignments---- 134---146  Regular Expression ------ */

/*
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

console.log(ip.match(/\w:\w/));
*/

/*
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/os\d*o/ig));

// Output
// ['Os10O', 'OsO', 'Os100O']
*/

/*
let phone = "+(995)-123 (4567)";

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/));
*/

/*
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/|\W+|\s)\d{2}(\/|\W+|\s)\d{2,}/; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

*/

/*
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.(org):?\d*\/?(\w+.)?(\w+)?(\?\w+)?\=?\d*?\&?(\w+)?(\=\w+)?/; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

*/


/* -- Assignments---- 147---158  OOP Object Oriented Programming ------ */

/*
class Car {
  constructor(name, model , price){
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run(){
    return `${this.n} Is Running Now`
  }

  stop(){
    return `${this.n} Is stopped `
  }
}

let carOne = new Car("KIA", 2021, 1000000);
let carTwo = new Car("MG", 2022, 420000);
let carThree = new Car("MB", 2023, 500000);

console.log(`Car Two Name Is ${carTwo.n} And Model Is ${carTwo.m} And Price is ${carTwo.p}`);
console.log(carTwo.run());

// Needed Output

"Car Twe Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
*/

/*
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size){
    super(name,serial,price);
    this.size = size || "Unknown";
  }
  fullDetails(){
    return `${this.name} is ${this.serial} And Size is ${this.size}`;
  }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
*/

/*
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData() {
    this.#c = this.#c.toString().match(/\d{4}/ig).join("-");
    return `Hello ${this.u}, Your Credit Card Number is ${this.#c}`;
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

*/

/*
String.prototype.addLove = function(){
  return `I Love Elzero Web School`;
}
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
*/

/*
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj, {
  id: {
    writable: true,
    enumerable: false,
    configurable: true,
  },
  score: {
    writable: false,
    enumerable: true,
    configurable: true,
  },
});


myObj.score = 500;
delete myObj.country;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

//"username => Elzero"
//"score => 1000"
//{username: 'Elzero', score: 1000, id: 100}

*/


/* -- Assignments---- 159---168  Date, Generators, Modules ------ */

/*
let dateNow = new Date();
let birthday = new Date("Oct 7, 98");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

let Seconds = dateDiff/ 1000
console.log(parseInt(Seconds));
let Miniutes = Seconds/ 60
console.log(parseInt(Miniutes));
let Hours = Miniutes/ 60
console.log(parseInt(Hours));
let Days = Hours/ 24
console.log(parseInt(Days));
let Years = Days/ 365
console.log(parseInt(Years));
*/

/*
let date = new Date(1980, 0, 1, 0, 0, 1);
console.log(date);

let date1 = new Date(0);
date.setFullYear("1980");
date.setSeconds("1");
date.setHours("0");
console.log(date1)
*/

/*
let date = new Date();
let lastMon = new Date();
lastMon.setDate("0");
console.log(lastMon);

date.setFullYear(2023);
date.setMonth(8,30);
date.setHours(18);
date.setMinutes(13);
date.setSeconds(20);
console.log(date)
*/

/*
let dateNow = new Date();
let birthday = new Date("Oct 7, 98");
console.log(birthday);

dateNow.setFullYear(1998);
dateNow.setMonth(9,7);
dateNow.setHours(0,0,0);
console.log(dateNow);
*/

/*
const t0 = performance.now(); 
console.log(t0);
for (let i = 0; i < 10000; i++) { 
	console.log(i); 
} 
const t1 = performance.now(); 
console.log(t1);
console.log(`Loop took ${parseInt(t1 - t0)} milliseconds.`);
*/

/*
function* gen() {
  let i = 1;
  while (true) {
    yield 100 * i * i - 160 * i + 74;
    i++;
  }
}
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
*/

/*
function* genNumbers() {
  yield* new Set ([1, 2, 2, 2, 3, 4, 5]);
}
function* genLetters() {
  yield* new Set(["A", "B", "B", "B", "C", "D"]);
}

function* genAll() {
  yield* genNumbers();
  yield* genLetters();
}

// Write Your Generator Function Here

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
*/



/* -- Assignments---- 169---178  JSON AND AJAX ------ */


/*
let myRequest = new XMLHttpRequest();
myRequest.open("GET","./articles.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    //console.log(this.responseText);
    //console.log("data loaded");
    let mainData = JSON.parse(this.responseText);
    for(let i = 0; i < mainData.length; i++){
      mainData[i].location = "All";
     // console.log(mainData);
    }
    let updateData = JSON.stringify(mainData);
    console.log(updateData);
  }
}
*/

/*
let myRequest = new XMLHttpRequest();
myRequest.open("GET","./articles.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    //console.log(this.responseText);
    //console.log("data loaded");
    let mainData = JSON.parse(this.responseText);
    for(let i = 0; i < mainData.length; i++){
      let parentDiv = document.createElement("div");
      parentDiv.id = "data";
      let childDiv = document.createElement("div");
      parentDiv.appendChild(childDiv);
      let head = document.createElement("h2");
      childDiv.appendChild(head);
      let headText = document.createTextNode(mainData[i].name);
      head.appendChild(headText);
      let par1 = document.createElement("p");
      childDiv.appendChild(par1);
      let parText1 = document.createTextNode(`ID: ${mainData[i].id}`);
      par1.appendChild(parText1);
      let par2 = document.createElement("p");
      childDiv.appendChild(par2);
      let parText2 = document.createTextNode(`Writer: ${mainData[i].writer}`);
      par2.appendChild(parText2);
      let par3 = document.createElement("p");
      childDiv.appendChild(par3);
      let parText3 = document.createTextNode(`Location: ${mainData[i].location}`);
      par3.appendChild(parText3);
      document.body.appendChild(parentDiv);
    } 
  }
}

*/

/* -- Assignments---- 179---187  Promises ------ */


/* Using Promise to loop on data api */

/*
const getData = (apiLink) => {
  return new Promise((resolve,reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function() {
      if(this.readyState === 4 && this.status === 200){
        resolve( JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }

    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("./articles1.json")
.then((result) => {
  result.length = 5;
  return result;
})
.then((result) => {
  console.log(result);
  for(let i = 0; i < result.length ; i++){
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = result[i].title;
    let p = document.createElement("p");
    p.innerHTML = result[i].description;
    div.appendChild(h3);
    div.appendChild(p);
    document.body.appendChild(div);
  }
})
.catch((reject) => console.log(reject))
.finally(console.log("The Operation Is Done"))

*/


/* Using Fetch Api with async and await function to loop on data api */

/*

async function fetchData() {
  try{
    let data = await fetch("./articles1.json");
    let myData = await data.json();
    myData.length = 5;
    console.log(myData);
    for(let i = 0; i < myData.length ; i++){
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerHTML = myData[i].title;
      let p = document.createElement("p");
      p.innerHTML = myData[i].description;
      div.appendChild(h3);
      div.appendChild(p);
      document.body.appendChild(div);
    }
  } catch (error){
    console.log("No Data Found")
  } finally{
    console.log("The Operation Is Done");
  }
}

fetchData()

*/

