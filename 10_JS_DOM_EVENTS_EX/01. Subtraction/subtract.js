function subtract() {
    const inputs = Array.from(document.querySelectorAll("input"));
  
    function handler() {
      const num1 = Number(document.querySelector("#firstNumber").value);
      const num2 = Number(document.querySelector("#secondNumber").value);
    
      const sum = num1 - num2;
  
      const result = document.querySelector("#result");
      result.textContent = sum;
    }

    inputs.forEach((input) => {
        input.removeAttribute("disabled");
        input.addEventListener("keyup", handler);
      });
    
  }