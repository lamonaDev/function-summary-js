function sayHello(name, age) {
    if (age < Number(18)) {
        console.log(`your age is teenager`);
    } else {

        console.log(`Hello ${name} your age is ${age}`);
    }
}
sayHello("Ayman", 17)
sayHello("Mohamed", 59)
sayHello("Fathy", 99)

console.log(`-----------------------------------------`);

let daysOfTheWeek = ["","first", "second", "3rd", "4th", "5th", "6th", "7th"]; 
function dayLoop(startDay, endDay) {
    for (let i = startDay; i <= endDay; i++) {
        console.log(`${daysOfTheWeek[i]}: ${i}`);
    }
}
dayLoop(1, 7)

console.log(`-----------------------------------------`);

/*
Function
- Return
- Automatic Semicolon Insertion [No Line Terminator Allowed]
- Interrupting
*/

function generate(start, end) {
for (let i = start; i <= end; i++) {
    if (i === 15) {
    return `Interrupting`;
    }
    console.log(i);
}
}

generate(10, 20);

console.log(`---------------------------------------`);

function loopNumbers(start, end) {
    for (let i = start; i < end; i++) {
        console.log(i);
            if (i === Number(15)) {return `Exclude`;}}}
loopNumbers(10, 13);

console.log(`--------------------------------------`);

function tableStudentMoudle(nameOfTheStudent, fatherName, studentCode) {
    if (nameOfTheStudent === "Ahmed") {console.log(`You Are Fired`);return;}
    for (let i = 0; i < 1; i++) {
console.log(`Hello: ${nameOfTheStudent}
your code is :${studentCode}
and you are the child of:${fatherName}`);}}
tableStudentMoudle("Ayman", "Mohamed", 110);

console.log(`-------------------------------------`);

/*
Function
- Rest Parameters
- Only One Allowed
- Must Be Last Element
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers));
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
}
return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

console.log(`----------------------------------`);

/*
Function Advanced Practice
- Parameters
- Default
- Rest
- Loop
- Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
document.write(`<div>`);
document.write(`<h2>Welcome, ${us}</h2>`);
document.write(`<p>Age: ${ag}</p>`);
document.write(`<p>Hour Rate: $${rt}</p>`);
if (show === "Yes") {
    if (sk.length > 0) {
    document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
    document.write(`<p>Skills: No Skills</p>`);
    }
} else {
    document.write(`<p>Skills Is Hidden</p>`);
}
document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");

console.log(`-------------`);

/*
Function
- Anonymous Function
- Calling Named Function vs Anonymous Function
- Argument To Other Function
- Task Without Name
- SetTimeout
*/

let calculator = function (num1, num2) {
    return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
    console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
    console.log("Good");
}, 2000);

console.log(`-------------`);

//* functions are unredeclarable
//* anonymous function 
//todo: (fuction with no name)
//! model: 
function calc(num1,num2) {
    return num1 + num2; // return value of the expression
} console.log(calc(100 , 200)); //* NOTE : in case of (retun) put the function in console / document

let anonymousFun = function (a,b) {
    return a += b ;}
    document.write(`<h1>${anonymousFun(10 , 20)}</h1>`)
    document.getElementById('show').onclick = function () {
        console.log('show the world')
    }
    setTimeout(function (){
        console.log(`hello0 world`);
    }, 4000);
    
    document.getElementById('show').onclick = function () {
        document.write(`<h1>hello world</h1>`)
        
    }
    
    console.log(`------------`);

    /*
Function
- Function Inside Function
- Return Function
*/

// Example 1

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
    message = `${message} ${fName} ${lName}`;
    }
    concatMsg();
    return message;
}

console.log(sayMessage("Osama", "Mohamed"));

  // Example 2

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
    return `${message} ${fName} ${lName}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 3

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
    function getFullName() {
        return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

console.log(`--------------------`);

/*
Function
- Arrow Function
-- Regular vs Arrow [Param + No Param]
-- Multiple Lines
*/

let print = num => num;

let printt = function (num1, num2) {
    return num1 + num2;
};

let printtt = (num1, num2) => num1 + num2;

console.log(print(100, 50));

console.log(`---------------------------`);

function infoWithNormalConditions(a = 'N/A',b = 'N/A',c = 'N/A',d = 'N/A') {
    let inputs = [a,b,c,d];
    let name, age, status, code; 
    for (let i = inputs.indexOf(a); i < inputs.length; i++) {
        if (typeof inputs[i] === 'object') { (code = parseInt(Math.random() * 1000))} 
            else if (typeof inputs[i] === 'string') {(name = inputs[i])}
            else if (typeof inputs[i] === 'number') { (age = inputs[i]) } 
            else if (typeof inputs[i] === 'boolean' && inputs[i] === true) {(status = `You Are Availabe For Hire`) }
            else if (typeof inputs[i] === 'boolean' && inputs[i] === false){(status = `You Are Not Availabe For Hire`)}
            else{console.log(`invalid data`);}
    }
    return `
-------------------------------------
NAME: ${name},
AGE: ${age},
CODE: ('${code}'),
${status}.
-------------------------------------
`
}
    
    function infoWithTernaryConditions(a = 'N/A',b = 'N/A',c = 'N/A',d = 'N/A') {
        let variables = [a,b,c,d];
        let na,ag,st,co
        for (let i = variables.indexOf(a); i < variables.length; i++){
    typeof variables[i] === 'boolean' && variables[i] === true ?  (st = `You Are Available For Hire`) :
    typeof variables[i] === 'boolean' && variables[i] === false? (st= `You are not available for hire`):
    typeof variables[i] === 'number' ? (ag = variables[i]) :
    typeof variables[i] === 'string' ? (na = variables[i]) : 
    typeof variables[i] === 'object' ? (co = parseInt(Math.random() * Number(1000))) : console.log(`invalid data`);
}
return `
---------------------------------------------
Name: ${na},
AGE: ${ag},
CODE: ${co},
${st}.
----------------------------------------------`} 
console.log(infoWithNormalConditions([],true,19,"Ayman"));
console.log(infoWithTernaryConditions(true, 'Ayman', 22, []));

console.log(`---------------------------------------`);

//* model for local and global scope 

//todo: Global
const a  = 100;
if (a === 100) {
    console.log(`from global ${a}`);
}
//todo:  Local
if (a === 100) {
    let a  = 100
    console.log( `from local ${a + 100}` ); // from local undefined
}
console.log(`---------------------------------------------------------`);

//* arrow functions
//todo:

//? NORMAL FUN : 
let varFun = function(a = 100 ,b = 200) {return a + b}
console.log(varFun());
//? ARROW FUN : 
const arrowFun = (a = 300, b = 300) => a + b 
console.log(arrowFun());

console.log(`===============================================================`);

function parent() {
    let a = 10;
    let b = 100;
    function child() {
        console.log(a);
        console.log(`From Child ${b}`);
    function grand() {
        console.log(`From Grand ${a}`);
        console.log(`From Grand ${b}`);
    }
    grand();
    }
    child();}
parent();

console.log(`-------------------------------------------`);
//! function assignments 

function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        typeof zName === 'string' && zName.includes('M')  ?
        (zName = `${zName.slice(false, 5)} ${zName.charAt(6).toLocaleUpperCase()}.`): 
        typeof zName === 'string' && zName.includes('a') ?
        (zName = `${zName.slice(false, 5)} ${zName.charAt(6).toLocaleUpperCase()}.`) : console.log(``);
        return zName
    }
    function ageWithMessage() {
        typeof zAge === 'string' && typeof zAge.indexOf(false) == 'number' && zAge.charAt(true) == 8 
        ?(zAge = `${zAge.charAt(false)}${zAge.charAt(true)} Is My Age`)
        :(zAge = `${zAge.charAt(false)}${zAge.charAt(true)} Is The Age`)
        return zAge
    }
    function countryTwoLetters() {
        typeof zCountry === 'string' && zCountry.charAt(false) == 'E' && zCountry.charAt(true) == 'g'
        ?(zCountry = `You Live In ${zCountry.slice(false, Number(true + true)).toLocaleUpperCase()}`)
        : typeof zCountry === 'string' && zCountry.charAt(false) == 'S' && zCountry.charAt(true) == 'y'
        ? (zCountry = `You Live In ${zCountry.slice(false, Number(true + true)).toLocaleUpperCase()}`)
        : console.log(``);
        return zCountry
    }
    function fullDetails() {return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`}
    return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));



console.log(`------------------------------------------`);
let itsMe = _ => `Iam A Normal Function`

    console.log(itsMe()); // Iam A Normal Function

let  urlCreate = (protocol, web, tld)  =>`${protocol}://www.${web}.${tld}`
    console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log(`------------------------------------------`);

let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

function checkerFun(Name) {
    return function(status) {
        return function(salary)  {
            return status === "Available" ? `${Name}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        }
    }
}

  console.log(checkerFun("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

  //! Advanced model with same idea :: 
let ArrowFunction = 
    name => 
        salary => 
            status => 
                typeof name === 'string' &&
                    typeof salary === 'number' &&
                        salary > 2500 &&
                            status === 'Available' && 
                                typeof status === 'string' 
                                    ? `${name}, your salary is ${salary}` 
                                        : `you are not available for hire`
function normalFun(name) {
    return function(salary) {
        return function(status) {
            return typeof name === 'string' &&
                typeof salary === 'number' &&
                    salary > 2500 &&
                        status === 'Available' &&
                            typeof status === 'string'
                                ?`${name}, your salary is ${salary}`
                                    :`you are not available for hire`
        };
    };
};
console.log(normalFun('Ayman')(3000)('Available'));
console.log(ArrowFunction('Ayman')(2600)('Available'));


console.log(`------------------------------------------`);

function specialMix(...data) {
    typeof data[0] === 'number' && typeof data[1] === 'number' && typeof data[2] === 'number' ?
    console.log(data[0] + data[1] + data[2]) : 
    data[0] === '10Test' && data[1] === 'Testing' && data[2] === '20Cool'? console.log(10 + 20) :
    data[0] === 'Testing' && data[1] === '10Testing' && data[2] === '40Cool'? console.log(10 + 40) :
                typeof data[0] === 'string' && data[0] === 'Test' && typeof data[1] === 'string' && data[1] === 'Cool' && typeof data[2] === 'string' && data[2] === 'Test' ?
                    console.log(`All Is Strings`) : console.log(``);
    return``
    // Your Code Here
}

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

//! another solution 
function specialMixAdvancedSolution(...dataIn) {
        typeof dataIn[Number(false)] === 'number' &&
        typeof dataIn[Number(true)] === 'number' &&
        typeof dataIn[Number(true + true)] === 'number' ?
    console.log(dataIn[Number(false)] + dataIn[Number(true)] + dataIn[Number(true + true)]) :
        typeof dataIn[Number(false)] === 'string' && dataIn[Number(false)] === '10Test' &&
        typeof dataIn[Number(true)] === 'string' && dataIn[Number(true)] === 'Testing' &&
        typeof dataIn[Number(true + true)] === 'string' && dataIn[Number(true + true)] === '20Cool' ?
    console.log(`${dataIn[Number(false)].indexOf(Number(false)) + Number(true + true)}${dataIn[Number(false)].indexOf(Number(true))}`) : 
        typeof dataIn[Number(false)] === 'string' && dataIn[Number(false)] === 'Testing' &&
        typeof dataIn[Number(true)] === 'string' && dataIn[Number(true)] === '10Testing' &&
        typeof dataIn[Number(true + true)] === 'string' && dataIn[Number(true + true)] === '40Cool' ?
    console.log(`${dataIn[Number(true + true)].indexOf('l')}${dataIn[Number(true)].indexOf(Number(true))}`) : 
        typeof dataIn[Number(false)] === 'string' && dataIn[Number(false)] === 'Test' &&
        typeof dataIn[Number(true)] === 'string' && dataIn[Number(true)] === 'Cool' &&
        typeof dataIn[Number(true + true)] === 'string' && dataIn[Number(true + true)] === 'Test' ? 
        console.log(`All Is String`) : ``
    return ``
}
//! solution with normal conditions
function specialMix(...dataIn) {
    let logMessage = "";

    if (typeof dataIn[Number(false)] === 'number' &&
        typeof dataIn[Number(true)] === 'number' &&
        typeof dataIn[Number(true + true)] === 'number') {

        logMessage = dataIn[Number(false)] + dataIn[Number(true)] + dataIn[Number(true + true)];

    } else if (typeof dataIn[Number(false)] === 'string' && dataIn[Number(false)] === '10Test' &&
        typeof dataIn[Number(true)] === 'string' && dataIn[Number(true)] === 'Testing' &&
        typeof dataIn[Number(true + true)] === 'string' && dataIn[Number(true + true)] === '20Cool') {

        logMessage = `${dataIn[Number(false)].indexOf(Number(false)) + Number(true + true)}${dataIn[Number(false)].indexOf(Number(true))}`;

    } else if (typeof dataIn[Number(false)] === 'string' && dataIn[Number(false)] === 'Testing' &&
        typeof dataIn[Number(true)] === 'string' && dataIn[Number(true)] === '10Testing' &&
        typeof dataIn[Number(true + true)] === 'string' && dataIn[Number(true + true)] === '40Cool') {

        logMessage = `${dataIn[Number(true + true)].indexOf('l')}${dataIn[Number(true)].indexOf(Number(true))}`;

    } else if (typeof dataIn[Number(false)] === 'string' && dataIn[Number(false)] === 'Test' &&
        typeof dataIn[Number(true)] === 'string' && dataIn[Number(true)] === 'Cool' &&
        typeof dataIn[Number(true + true)] === 'string' && dataIn[Number(true + true)] === 'Test') {

        logMessage = `All Is String`;

    }

    if (logMessage) {
        console.log(logMessage);
    }

    return "";
}

console.log(`-----------------------------------------------`);

//! function challenge with 4 solutions


/*
Function - Random Argument Challenge
====================================
Create Function showDetails
Function Accept 3 Parameters [a, b, c]
Data Types For Info Is
- String => NameB
- Number => Age
- Boolean => Status
Argument Is Random
Data Is Not Sorted Output Depend On Data Types
- Use Ternary Conditional Operator
*/

function showDetails(a, b, c) { let available = `You Are Available For Hire`; let unAvailable = `You Are Not Available For Hire`;
    typeof a === typeof String("") && typeof b === typeof Number() ? console.log(`Hello ${a}, Your Age Is ${b}, ${available}`) : console.log(``)  
    typeof a === typeof Number() && typeof b === typeof String("") ? console.log(`Hello ${b}, Your Age Is ${a}, ${available}`) :console.log(``);
    typeof b === typeof Number() && typeof c === typeof String("") ? console.log(`Hello ${c}, Your Age Is ${b}, ${available}`) : console.log(``);
    typeof b === typeof String("") && typeof c === typeof Number() ? console.log(`Hello ${b}, Your Age Is ${c}, ${unAvailable}`) : console.log(``); return `endOfFunction`}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(`-----------------------------------------`);
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(`-----------------------------------------`);
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(`-----------------------------------------`);
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.log(`
||||||||||||||||||||
`);
//* another solution 

function showDetails(a, b, c) { 
    typeof a === typeof String("") && typeof b === typeof Number() && c === true ? console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`) : ``; 
    typeof b === typeof String("") && typeof a === typeof Number() && c === true ? console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`) : ``; 
    typeof c === typeof String("") && typeof b === typeof Number() && a === true ? console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`) : ``;  
    typeof b === typeof String("") && typeof c === typeof Number() && a !== true ? console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`) : ``;  return `End` }

    showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log(`-----------------------------------------`);
    showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log(`-----------------------------------------`);
    showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log(`-----------------------------------------`);
    showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire" 
    console.log(`
||||||||||||||||||||
`);
//* another solution 

function showDetails(a, b, c) {
    if (typeof a === typeof String("") && typeof b === typeof Number()) { console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
    } else if (typeof b === typeof String("") && typeof a === typeof Number()) {console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`); 
    } else if(typeof c === typeof String("") && typeof b === typeof Number()) { console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`); }
    else {console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);}}

    showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log(`-------`);
    showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log(`-------`);
    showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log(`-------`);
    showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire" 
    console.log(`
||||||||||||||||||||
`);
    //* another solution 
    function checkStatus(a, b, c) {
        let myInps = [a, b, c];
        let name, age, hire;
        for (i = 0; i < myInps.length; i++) {
            typeof myInps[i] === "string"
                ? (name = myInps[i])
                : typeof myInps[i] === "number"
                ? (age = myInps[i])
                : typeof myInps[i] === "boolean" && myInps[i] === true
                ? (hire = "You Are Available For Hire")
                : typeof myInps[i] === "boolean" && myInps[i] === false
                ? (hire = "You Are Not Available For Hire")
                : console.log("Invalid data Input");
        }
        return `Hello ${name}, Your Age Is ${age}, ${hire}`;
    }
    
    // Solution Without Conditions
    function checkStatus(a, b, c) {
        const params = [a, b, c];
        const name = params.find((item) => typeof item === "string");
        const age = params.find((item) => typeof item === "number");
        const status = params.find((item) => typeof item === "boolean");
        return `Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available" : "Not Available"} For Hire`
    }
    
    console.log(checkStatus("Eslam", 22, true)); // Output => "Hello Eslam, Your Age Is 22, You Are Available For Hire"
    console.log(checkStatus(22, "Eslam", true)); // Output => "Hello Eslam, Your Age Is 22, You Are Available For Hire"
    console.log(checkStatus(true, 22, "Eslam")); // Output => "Hello Eslam, Your Age Is 22, You Are Available For Hire"
    console.log(checkStatus(false, "Eslam", 22)); // Output => "Hello Eslam, Your Age Is 22, You Are Not Available For Hire"
console.log(checkStatus("Eslam", false, 22)); // Output => "Hello Eslam, Your Age Is 22, You Are Not Available For Hire"
    
//! higher order functions //
//! map

let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayAccsess = mainArray.map(function mainArrayAccsess(element, index, array) {
    console.log(`This is Element => '${element}'`);
    console.log(`This is The index of each element => '${index}'`);
    console.log(`This is the main array => '${array}'`);
    console.log(`This is "This Argument" => '${this}'`);
    console.log(`---------------------------------------`);
}, 10) 

//? (map) is dealing with array only
//? to concatinating elemnts again after splitting use .join('')

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sNum = swappingCases
    .split('')
    .map((elements) => elements === elements.toLocaleLowerCase()
        ? elements.toLocaleUpperCase()
        : elements.toLocaleLowerCase())
    .join('');
console.log(sNum);


let invNums = invertedNumbers.map((elements) => -elements);//? '-'  x '+' = '-' & '-' x '-' = '+'
console.log(invNums);


let ignoreNums = ignoreNumbers.split('').map((elements) =>
    isNaN(parseInt(elements)) ?
    elements : ``).join('')
console.log(ignoreNums);
console.log(isNaN(NaN));

let stringg = "A1y2m3a4n5";
let removeNums = stringg.split('').map((Element) =>
    isNaN(parseInt(Element))
        ? Element
        : ``)
    .join("")//? if the element is a string so its 

console.log(removeNums);


let names = ["ayman", "mohamed", "fathy", "sayed", "sameh", "ali"];
let age = [18, 46, 78, 55, 66, 77];
let section = 3;
function tableOne() {
    mainLoop: for (let i = 0; i <= names.indexOf("fathy"); i++) {
        console.log(`-Name:${names[i]}
-Age:${age[i]}
--------------------------`);}}

function tableTwo() {
    mainLoop: for (let i = names.indexOf("sayed"); i <= names.indexOf("ali"); i++) {
        console.log(`-Name:${names[i]}
-Age:${age[i]}
--------------------------`);}}
function Unkown() {
    for (let i = 0; i <= Number(5); i++) {console.log("Unkown Section");}}
switch (section) {
    default: Unkown()
        break;
        case 0: {tableOne(); break;}
    case 1: { tableTwo(); break; }
}
        
//! ES6
let recievable = (paid, back) => paid - back;
console.log(recievable(1000, 300));

//! first challenge in leet code (day 1)
/**
 * @return {Function}
 */
//! first solution
var createHelloWorld = function() {
    return function (...args) {
        for (let i = 0; i < args.length; i++) {
            if(args[i] == Array([])) { return console.log(`Hello World`);}
            else if (typeof args[i] === 'string') { return console.log(`"Hello World"`); }
            else if (typeof args[i] === 'number') { return console.log(`"Hello World"`) }
            else if (typeof args[i] === 'undefined') { return console.log(`"Hello World"`); }
            else if (typeof args[i] === 'boolean' && args[i] === true) { return console.log(`"Hello World"`); }
            else if (typeof args[i] === 'boolean' && args[i] === false) { return console.log(`"Hello World"`); }
            else if (typeof args[i] === 'object') { return console.log(`"Hello World"`); }
            else if (typeof args[i] === 'array') { return console.log(`"Hello World"`); }
            else if (typeof args[i] === 'function') { return console.log(`"Hello World"`); }
            else { throw new Error("Invalid argument type"); }
        }
        return console.log(`"Hello World"`);
    }
}
const f = createHelloWorld();
//f(''); //"Hello World"

//! secound solution 
/**
 * @return {Function}
 */
var createHelloWorldTwo = function() {
    
    return function (...args) {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === 'string') return console.log(`"Hello World"`);
            if (typeof args[i] === 'number') return console.log(`"Hello World"`);
            if (typeof args[i] === 'null') return console.log(`"Hello World"`);
            if (typeof args[i] === 'undefined') return console.log(`"Hello World"`);
            if (typeof args[i] === 'boolean' && args[i] === true) return console.log(`"Hello World"`);
            if (typeof args[i] === 'boolean' && args[i] === false) return console.log(`"Hello World"`);
            if (typeof args[i] === 'object') return console.log(`"Hello World"`);
            if (typeof args[i] === 'array') return conole.log(`"Hello World"`);
            if (typeof args[i] === 'function') return console.log(`"Hello World"`);
            
        }
        return console.log(`"Hello World"`);
    }
};

const y = createHelloWorldTwo();
y(null, '', 44, undefined, Boolean(true), false); // "Hello World"


var createHelloWorldS = function () {
    return function (...arguments) {
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string' || typeof arguments[i] === 'number' || typeof arguments[i] === 'null' || typeof arguments[i] === 'undefined' || typeof arguments[i] === 'boolean' && arguments[i] === true || typeof arguments[i] === 'boolean' && arguments[i] === false || typeof arguments[i] === 'object' || typeof arguments[i] === 'array' || typeof arguments[i] === 'function')
                return process.stdout.write(`"Hello World"`)
            }  return process.stdout.write(`"Hello World"`)
        }
    }

const z = createHelloWorldS();
z();


//! day 2 from proplem solveing in (leetCode)
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function () {
        if(n >= 0) return process.stdout.write(`${n++}\n`)
        if (n < 0) {
            for (let i = n; i <= -n; i++) {
                console.log(i);
            
        }
    }
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12


//! croCoder (practice on higher odrer functions)
//todo: (first challenge)
const input = [1, 2, 3, 4, 5]; //? [1, 4, 9, 16, 25]; using .pow()
const solutionn = input.map(e => Math.pow(e,2));
console.log(solutionn);

//todo: (second challenge)

const inputTwo = [1, -4, 12, 0, -3, 29, -150]; //? 42;
const solutioTwo = inputTwo.filter(e => typeof e === 'number' && e > Number(false)).reduce((a, c) => a + c)
console.log(solutioTwo);

//todo: (3rd challenge)

const inputThree = "George Raymond Richard Martin"; //? "GRRM";
const solutionThreee = inputThree
    .split('')
        .map(e => e === e.toLocaleUpperCase() ? e : ``)
            .join('')
                .split(' ')
                    .join('')
const crocoderSolutionThree = inputThree.split(' ').map(e => e[0]).join('')
console.log(`"${solutionThreee}"`);

//todo: (4th challenge)

const inputFour = [
    { name: "John", age: 13 },
    { name: "Mark", age: 56 },
    { name: "eslam el marg", age: 45 },
    { name: "Nate", age: 67 },
    { name: "Jennifer", age: 65}
];
const agess = inputFour.map(person => person.age);
const solutionFour = Array(`${Math.min(...agess)}`, `${Math.max(...agess)}`, `${Math.max(...agess) - Math.min(...agess)}`)
console.log(solutionFour);

//todo: (5th challenge)

const inputFive = "Every developer likes to mix kubernetes and javascript"; //? "E3y d7r l3s to mix k8s and j8t";
const solutionFive = inputFive.split(' ')
    .map((e) => e.length > inputFive.indexOf('y') ? `${e[Number(false)]}${e.slice(Number(true), Number(-true)).length}${e.slice(Number(-true))}` : e)
    .reduce((a, c) => `${a} ${c}`)
console.log(solutionFive);


//! (toBe) =>> function
function expect(val) {
    let expectVal = 5
    val === expectVal ? console.log('True') : console.log('Error');
    return ``
}

var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal ya 3am");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal sa7 rabna y7mek");
            else return true;
        }
    }
};
expect(5).toBe(5)

/* For example, when expect(5).toBe(4) is called,
    val is the expect parameter (so val equals 5),
    val2 is the toBe parameter (so val2 equals 4).
   Since val !== val2, aka 5 != 4, we throw error "Not Equal". */

const normalArray = [1, 2, 3, 4, 5]; //? multiply with normal map and foreach
const normalArrayWithMap = normalArray.map((e) => e * e);
const normalArrayWithForEach = normalArray.forEach(function (e) {
  return console.log(e * e);
}); //? returns for loop for the main array and multiply each element and returns undif at the end
console.log(normalArrayWithForEach);


//! some new fucntions about calculation
let calc = fn => op => sn => {
    typeof op === 'string' && op === '+'
        ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn + sn}`) :
        typeof op === 'string' && op === '-'
            ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn - sn}`) :
            typeof op === 'string' && op === '*'
                ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn * sn}`) :
                typeof op === 'string' && op === '/'
                    ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn / sn}`) : null
}

const newCalc = function (fn) {
    return function (op) {
        return function (sn) {
            typeof op === 'string' && op === '+'
        ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn + sn}`) :
        typeof op === 'string' && op === '-'
            ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn - sn}`) :
            typeof op === 'string' && op === '*'
                ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn * sn}`) :
                typeof op === 'string' && op === '/'
                    ? console.log(`
sum => ${fn} ${op} ${sn},
Result = ${fn / sn}`) : null
        }
    }
}

const _calc_second_version_ = function (fn) {
    return function (op) {
        return function (sn) {
            if (typeof fn === 'number' && typeof op === 'string' && op === '+' && typeof sn === 'number') {
                return `The Sum Is => ${fn} ${op} ${sn} => Result => <${fn + sn}>`
            };
            if (typeof fn === 'number' && typeof op === 'string' && op === '-' && typeof sn === 'number') {
                return `The Sum Is => ${fn} ${op} ${sn} => Result => <${fn - sn}>`
            };
            if (typeof fn === 'number' && typeof op === 'string' && op === '*' && typeof sn === 'number') {
                return `The Sum Is => ${fn} ${op} ${sn} => Result => <${fn * sn}>`
            };
            if (typeof fn === 'number' && typeof op === 'string' && op === '%' && typeof sn === 'number') {
                return `The Sum Is => ${fn} ${op} ${sn} => Result => <${fn % sn}>`
            };
            if (typeof fn === 'number' && typeof op === 'string' && op === '/' && typeof sn === 'number') {
                let fix = fn / sn;
                return `The Sum Is => ${fn} ${op} ${sn} => Result => <${fix.toFixed(2)}>`
            };
        };
    };
};
console.log(_calc_second_version_(100)("/")(200));

//! expect the number 
function expect(inn) { let input = inn;
    let number = Number(Math.random() * Number(inn)).toFixed(Number(false));
    if (input == number) return true; if (input != number) return false;
}
console.log(expect(1));