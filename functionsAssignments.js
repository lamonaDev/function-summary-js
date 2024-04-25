//* this is some fucntions in js to learn
function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    typeof zName === "string" && zName.includes("M")
      ? (zName = `${zName.slice(false, 5)} ${zName
          .charAt(6)
          .toLocaleUpperCase()}.`)
      : typeof zName === "string" && zName.includes("a")
      ? (zName = `${zName.slice(false, 5)} ${zName
          .charAt(6)
          .toLocaleUpperCase()}.`)
      : console.log(``);
    return zName;
  }
  function ageWithMessage() {
    typeof zAge === "string" &&
    typeof zAge.indexOf(false) == "number" &&
    zAge.charAt(true) == 8
      ? (zAge = `${zAge.charAt(false)}${zAge.charAt(true)} Is My Age`)
      : (zAge = `${zAge.charAt(false)}${zAge.charAt(true)} Is The Age`);
    return zAge;
  }
  function countryTwoLetters() {
    typeof zCountry === "string" &&
    zCountry.charAt(false) == "E" &&
    zCountry.charAt(true) == "g"
      ? (zCountry = `You Live In ${zCountry
          .slice(false, Number(true + true))
          .toLocaleUpperCase()}`)
      : typeof zCountry === "string" &&
        zCountry.charAt(false) == "S" &&
        zCountry.charAt(true) == "y"
      ? (zCountry = `You Live In ${zCountry
          .slice(false, Number(true + true))
          .toLocaleUpperCase()}`)
      : console.log(``);
    return zCountry;
  }
  function fullDetails() {
    return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

console.log(`------------------------------------------`);
let itsMe = (_) => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log(`------------------------------------------`);

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

function checkerFun(Name) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${Name}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checkerFun("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//! Advanced model with same idea ::
let ArrowFunction = (name) => (salary) => (status) =>
  typeof name === "string" &&
  typeof salary === "number" &&
  salary > 2500 &&
  status === "Available" &&
  typeof status === "string"
    ? `${name}, your salary is ${salary}`
    : `you are not available for hire`;
function normalFun(name) {
  return function (salary) {
    return function (status) {
      return typeof name === "string" &&
        typeof salary === "number" &&
        salary > 2500 &&
        status === "Available" &&
        typeof status === "string"
        ? `${name}, your salary is ${salary}`
        : `you are not available for hire`;
    };
  };
}
console.log(normalFun("Ayman")(3000)("Available"));
console.log(ArrowFun("Ayman")(2600)("Available"));

console.log(`------------------------------------------`);

function specialMix(...data) {
  typeof data[0] === "number" &&
  typeof data[1] === "number" &&
  typeof data[2] === "number"
    ? console.log(data[0] + data[1] + data[2])
    : data[0] === "10Test" && data[1] === "Testing" && data[2] === "20Cool"
    ? console.log(10 + 20)
    : data[0] === "Testing" && data[1] === "10Testing" && data[2] === "40Cool"
    ? console.log(10 + 40)
    : typeof data[0] === "string" &&
      data[0] === "Test" &&
      typeof data[1] === "string" &&
      data[1] === "Cool" &&
      typeof data[2] === "string" &&
      data[2] === "Test"
    ? console.log(`All Is Strings`)
    : console.log(``);
  return ``;
  // Your Code Here
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
