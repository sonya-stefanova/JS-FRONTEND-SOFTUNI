function addItem() {
    const selectnewItemValue = document.querySelector("#newItemText").value;
    const item = document.createElement("li");
    item.textContent = selectnewItemValue;
  
    document.querySelector("ul").appendChild(item);
  }