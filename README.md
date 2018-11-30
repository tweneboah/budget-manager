# BUDGET MANAGER PROJECT
# CHATTING WITH THE DOM


```javascript

//Btn eventListener function

document.querySelector("#calc-age").addEventListener("click", function (e) {
  e.preventDefault();
 
  //Selecting IDs
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const display = document.querySelector("#display-fullName");
  const yearOfBirth = document.querySelector("#year-of-birth").value;
 

  function calculateAge(yearOfBirth) {
   
    //Pricing
    const price1 = "$20000.00";
    const price2 = "$30000.00";
    const price3 = "$40000.00"

    //Other variables
   const retirementAge = 60;
   const currentYear = 2018;
   
   //Calculations
   const age = currentYear-yearOfBirth;
   const retirementAgeRemaining = retirementAge - age;

   //Conditions

    if (firstName == "" || lastName == "" || yearOfBirth == "")  {
      alert(`Hi ${firstName} ${lastName} try to fill all the required fields`);

    } else if (retirementAgeRemaining >= 30){
      display.innerHTML = `Hi ${firstName} - ${lastName} your age as at 2018 is ${age} years, and your retiring years left is ${retirementAgeRemaining} because of that we are giving you ${price1} for your Daughters Education`;
    } else if (retirementAgeRemaining <= 20) {
       display.innerHTML = `Hi ${firstName} - ${lastName} your age as at 2018 is ${age}years, and your retiring years left is ${retirementAgeRemaining} because of that we are giving you ${price2} for your Daughters Education`;
    } else {
      alert("You don't qualify")
    }
  
  }
  
    calculateAge(yearOfBirth);

});







```
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
