function sumTable() {
    const selectedPrices = Array.from(document.querySelectorAll("td:nth-child(2)"));
    // remove the last #sum element because it holds the sum of all td-s.
    selectedPrices.pop();
    
    const total = selectedPrices.reduce((acc, curr) => {
      return acc + Number(curr.textContent);
    }, 0);
  
    document.querySelector("#sum").textContent = total;
  }