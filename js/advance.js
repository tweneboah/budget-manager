
//Function constructor

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





