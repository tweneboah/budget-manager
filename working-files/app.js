

//BUDGET CONTROLLER
let budgetController = (function() {

})();

//UI CONTROLLER
let UIController = (function(){


        //DOM ID/CLASS
        var DOMstring = {
            inputType: ".add__btn",
            description: ".add__description",
            inputValue: ".add__value",
            inputBtn: ".add__btn"
        }

return  {
    getInput: function () {
        return {
            type: document.querySelector(DOMstring.inputType).value, //will 
            description: document.querySelector(DOMstring.description).value,
            value: document.querySelector(DOMstring.inputValue).value
        };

       
    },
     getDOMstrings: function () {
       return DOMstring;
     }
};
    
})();






//GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl){

    let setupEventListener = function (){
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
        document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13) {

                ctrlAddItem();
            }
        });
    };

    //making use of the getDOMstrings from different controller
  let ctrlAddItem = function(){   
  // 1.get input data
  const input = UIController.getInput();
        console.log(input);

        // 2. Add item to the controller

        // 3. Add the item to the UI

        //4. Calculate the budget

        //Display the budget on the UI
     };
  
     //We want to make our function setupEventListener public
     return {
         init: function () {
             console.log("Application has started.")
             setupEventListener();
         }
     }

//

})(budgetController, UIController);

//Calling our init function

controller.init();


