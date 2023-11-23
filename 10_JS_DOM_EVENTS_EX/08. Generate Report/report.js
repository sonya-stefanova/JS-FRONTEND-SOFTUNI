function generateReport() {
    let headers = Array.from(document.querySelectorAll("table thead tr th input"));
    let rows = Array.from(document.querySelectorAll("table tbody tr"));
    let resultArray = [];

    rows.forEach((currRow) => {
        let cells = Array.from(currRow.children);
        let objectPerRow = {};
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].checked) {
                let attributeName = headers[i].getAttribute("name");
                objectPerRow[attributeName] = cells[i].textContent;
            }
        }
        resultArray.push(objectPerRow);
    });

    let outputElement = document.getElementById("output");
    outputElement.value = JSON.stringify(resultArray);
}