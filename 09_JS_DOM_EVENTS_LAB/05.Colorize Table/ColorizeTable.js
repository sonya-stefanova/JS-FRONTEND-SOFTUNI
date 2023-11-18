function colorize() {
    rowsSelector = Array.from(document.querySelectorAll("tr:nth-child(even)"));
    rowsSelector.forEach(row => {
        row.style.backgroundColor = "teal";
    });
}   