
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

    //Other variablesyyyyyyyy
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






