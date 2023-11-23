function solve() {
    let resultElement = document.querySelector("#result");
    let selectMenuElement = document.querySelector("#selectMenuTo");
    let buttonElement = document.querySelector("button");

    const optionCreator = (content, value) => {
        let option = document.createElement("option");
        option.innerHTML = content;
        option.value = value;
        return option;
    }    

    selectMenuElement.appendChild(optionCreator("Binary", "binary"));
    selectMenuElement.appendChild(optionCreator("Hexadecimal", "hexadecimal"));

    buttonElement.addEventListener("click", () => {
        let numberToConvert = Number(document.querySelector("#input").value);

        let selectedConverter = selectMenuElement.value === "binary" ? 2 : 16;
        resultElement.value = numberToConvert.toString(selectedConverter).toUpperCase();
    });
};