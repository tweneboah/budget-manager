
//Function constructor
/*
const Person = function (firstName, lastName, yearOfBirth, job) {
this.firstName = firstName;
this.lastName = lastName;
this.yearOfBirth = yearOfBirth;
this.job = job;
}

//This function is available to it's child
Person.prototype.fullName = function(){
return `Your full name is ${this.firstName} ${this.lastName}`
}

//Another function to determine if your job is programming
Person.prototype.isYourJobProgrammer = function(){
   if (this.job == "Programmer") {
       alert("You are there");
   }

}


//Instantiating my object
const person1 = new Person("Emmanuel", "Tweneboah",1988,"Programmer");

//Calling my function Full name
const fullName = person1.fullName();
console.log(fullName);
 person1.isYourJobProgrammer();



 //Passing functions as arguement

 const years = [1890, 1990, 2005, 1988];
 /*
 1.For this data we can determine the age of each
  2. We can determine if a certain age is above or below a certain age
 

 function arrayCalc (arr,fn) {
     const arrayResults = [];
     for (let i = 0; i < arr.length; i++) {
      arrayResults.push(fn(arr[i]))
         
     }

     return arrayResults;
 }


//Calculate age function
function calculateAge (el){
    return 2018 - el;
}

//Function to determine if one is below 18 years
function isAboveEighteenYears (el){
    return el >= 18;
}

//Using the functions

let ages = arrayCalc(years, calculateAge);
const isFullAge = arrayCalc(ages, isAboveEighteenYears);

console.log(ages);
console.log(isFullAge);

*/


//FUNCTIONS RETURNING ANOTHER FUNCTIONS
function interviewQuestions (job){

    if (job === "programmer") {
        return function (personName){
            console.log(`What subject do you teach ${personName} ?`);
        }
    }else if (job === "teacher") {
        return function (personName){
       
        }
       
    }else {
        return function(personName) {
            console.log(`hello ${job} what do you do?`);
        }
    }

}




//Using the functions

// const teacherQuestions = interviewQuestions("teacher");
// // // const programmerQuestions = interviewQuestions("programmer");


//  teacherQuestions("Emmanuel");
// //  programmerQuestions("Tweneboah");

// function login(role){
//     if (role === "admin") {
//         return function(password){
//             console.log(`welcome ${password}`)
//         }
//     }
// }

// const admin = new login ("admin")
// admin(1234);



// (function add(emma) {
//     console.log("Gooby " + "Tweneboah");
// })();




const studentLevel = (level) => {
  if (level === "stage1") {
      return studentName => {
        console.log(`What's the name of your current teacher ${studentName}`);
      }
  }else if (level === "stage2") {
      return studentName => {
          console.log(`What's the current date? ${studentName}`);
      }
  }else if (level === "stage3") {
      return studentName => {
          console.log(`${studentName} explain the word verb`);
      }
  }else{
      return studentName => {
          console.log(`Are you sure you are in this class ? ${studentName}`);
      }
  }

}

//Using the function
const stage1Questions =  studentLevel("stage");
const stage2Questions = studentLevel("stage2");
const stage3Questions = studentLevel("stage3");

stage1Questions("Prince");
stage2Questions("Thomas");
stage3Questions("Agnes");



(function add(num1, num2){
    alert(num1 + num2);
})(20, 10);

















