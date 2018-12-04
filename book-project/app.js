

// Book Constructor

function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn =isbn;
}


//UI Constructor

function UI (){
          //Add book list
          UI.prototype.addBookToList = function(book){
              const list = document.getElementById("book-list");

              //Create tr element
              const row = document.createElement("tr");

              //Insert cols
              row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href = "#" class = "delete">x</a></td>`;
              //Append to list
              list.appendChild(row);

          }

          //Clear fields
          UI.prototype.clearFields = function (){
              document.getElementById("title").value = "";
              author = document.getElementById("author").value = "";
              isbn = document.getElementById("isbn").value = "";
          }
}


//Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e){
   
    //Get form Values
    const title = document.getElementById("title").value;
            author = document.getElementById("author").value;
            isbn = document.getElementById("isbn").value;

  //Instantiating book constructor
  const book = new Book (title, author, isbn);
    

  //Instantiate UI Constructor
  const ui = new UI ();


//Validation
if (title === "" || author === "" || isbn === "") {
   //alert
   UI.showAlert("Please fill in all", "error")
}else{
    //Add book to list by passing an instant of my book object to the prototype function
        ui.addBookToList(book);
        //Clear field Prototype instantiating
        ui.clearFields(book);
}

  

    e.preventDefault();

});