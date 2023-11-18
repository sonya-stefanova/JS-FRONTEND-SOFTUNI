function addItem() {
    const value = document.querySelector("#newItemText").value;
  
    const inputToAdd = document.createElement("li");
    document.querySelector("ul").appendChild(inputToAdd);
    inputToAdd.textContent = value;

    const deleteButton = document.createElement("a");
    inputToAdd.appendChild(deleteButton);
    deleteButton.href = "#";
    deleteButton.textContent = "[Delete]";
  
    deleteButton.addEventListener("click", (e) => {
      e.target.parentElement.remove();
  
    });


  
  }