function solve() {

    // Constants definitions

    const [inputField, cartField] = document.getElementsByTagName("textarea");
    const tableBody = document.getElementsByTagName("tbody")[0];
    const [buttonGenerate, buttonBuy] = document.getElementsByTagName("button");
  
    // "Generate" functionality

    buttonGenerate.addEventListener("click", () => {
      let inputArray = JSON.parse(inputField.value);
      for (const entry of inputArray) {
        tableBody.appendChild(createTableRow(entry));
      }
    })
  
    function createTableRow(entry) {
      let tr = document.createElement("tr");
      tr.appendChild(createTdElement(entry.img, "img"));
      tr.appendChild(createTdElement(entry.name, "p"));
      tr.appendChild(createTdElement(entry.price, "p"));
      tr.appendChild(createTdElement(entry.decFactor, "p"));
      tr.appendChild(createTdElement("", "input"));
      return tr;
    }
  
    function createTdElement(content, type) {
      let newContentElement = document.createElement(type);
      if (type === "img") {
        newContentElement.src = content;
      } else if (type === "p") {
        newContentElement.textContent = content;
      } else {
        newContentElement.type = "checkbox";
      }
      let td = document.createElement("td");
      td.appendChild(newContentElement);
      return td;
    }
  
    // "Buy" functionality
  
    buttonBuy.addEventListener("click", () => {
      let itemsArray = [];
      const tdElements = Array.from(document.getElementsByTagName("td"));
      for (let i = 0; i < tdElements.length; i += 5) {
        const checkboxElement = tdElements[i + 4].children[0];
        if (checkboxElement.checked) {
          itemsArray.push({
            name: tdElements[i + 1].children[0].textContent,
            price: Number(tdElements[i + 2].children[0].textContent),
            factor: Number(tdElements[i + 3].children[0].textContent)
          });
        }
      }
  
      const boughtFurniture = itemsArray.map(x => x.name).join(", ");
      let totalPrice = 0;
      itemsArray.forEach(x => totalPrice += x.price);
      let decorationFactor = 0;
      itemsArray.forEach(x => decorationFactor += x.factor);
      decorationFactor /= itemsArray.length;
  
      const output = `Bought furniture: ${boughtFurniture}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor}`;
      cartField.textContent = output;
    })
  }