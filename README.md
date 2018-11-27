# BUDGET MANAGER PROJECT
#FUNCTIONS

```javascript
//Functions

//Calculate age function
function calculateAge (yearOfBirth) {
 let age = 2018 - yearOfBirth;
 return age;
}

//Anytime we use a return keyword we need to assign a variable to it when we are executing it

let emmaAge = calculateAge(1988);
let tweneboahAge = calculateAge(1999);
console.log(`Emmanuel's age is ${emmaAge} years old`);
console.log(`Tweneboah's age is ${tweneboahAge} years old`);

//fubction to calculate area of a rectangle
function areaOfArectangle(length, width) {
    //Tip: whatever that must be passed as arguments must be defined inside or outside the function
    let area = length * width;
    return area;
}
let area = areaOfArectangle(10,6);
console.log(`The area of the rectangle is : ${area}m`);


//FUCTION CALLING ANOTHER FUNCTION
function calculateAge(yearOfBirth) {
    let age = 2018 - yearOfBirth;
    return age;
}

function yearsUntilRetirement (name, year) {
 let age = calculateAge(year);
 let retirement = 60 - age;
 return retirement;
}

let yearsToRetire = yearsUntilRetirement("Tweneboah", 1999);

console.log(yearsToRetire);

function yearsUntilRetirement (name, yearOfBirth){
    let age = 2018 - yearOfBirth;
    return `${name} your age is ${age}`
}

let yearsUntilRetirement1 = yearsUntilRetirement("Emmanuel", 1988);
console.log(yearsUntilRetirement1);
```
