// function toggle() {
//     const content = document.querySelector('#extra');
//     const button = document.querySelector('span.button');

//     if (content.style.display !== 'block') {
//         content.style.display = 'block';
//         button.textContent = 'Less'; 
//     } else {
//         content.style.display = 'none';
//         button.textContent = 'More'; 

//     };

    
// }


function toggle() {
    const extraContent = document.querySelector("#extra");
    const button = document.querySelector("span.button");
  
    content.style.display = content.style.display === "block" ? "none" : "block";
    button.textContent = button.textContent === "More" ? "Less" : "More";
  }