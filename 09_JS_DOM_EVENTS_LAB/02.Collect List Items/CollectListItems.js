function extractText() {
    const listItems = Array.from(document.querySelectorAll("li"));
    const contentToTransfer = listItems.map((item)=>item.textContent).join("\n");

    document.querySelector("textarea").value = contentToTransfer;

}

/*
function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let result = '';

    for (const item of listItems) {
        result += item.textContent.trim() + `\n`;
    }

    document.getElementById('result').textContent = result.trim();
}

*/