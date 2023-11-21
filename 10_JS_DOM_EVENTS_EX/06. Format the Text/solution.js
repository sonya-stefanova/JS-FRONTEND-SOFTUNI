function solve() {
  const input = document.querySelector("#input").value.split(".");
  // the last element after the fullstop is cleared;
  input.pop();
  const textArea = document.querySelector("#output");

  while (input.length > 0) {
    const p = document.createElement("p");
    p.textContent = input
      .splice(0, 3)
      .map((text) => (text.trim()) + '.')
      .join(".");
    textArea.appendChild(p);
  };

}