// function encodeAndDecodeMessages() {
//     const [encodeMessage, decodeMessage] = document.querySelectorAll("textarea");
//     const [encodeButton, decodeButton] = document.querySelectorAll("button");

//     encodeButton.addEventListener("click", () => {
//         const inputText = encodeMessage.value;
//         encodeMessage.value = "";
//         decodeMessage.textContent = changeMessage(inputText, 1);
//     });
//     decodeButton.addEventListener("click", () => {
//         const decodedText = changeMessage(decodeMessage.value, -1);
//         decodeMessage.value = decodedText;
//     })

//     function changeMessage(message, step) {
//         let changedStr = "";
//         for (let i = 0; i < message.length; i++) {
//             //turn each element from the string into an Ascii number from the ASCII table;
//             const asciiElement = message.charCodeAt(i) + Number(step);
//             changedStr += String.fromCharCode(asciiElement);
//         }
//         return changedStr;
//     }
// }

function encodeAndDecodeMessages() {
    const [encodeMessage, decodeMessage] = document.querySelectorAll("textarea");
    const [encodeButton, decodeButton] = document.querySelectorAll("button");

    encodeButton.addEventListener("click", () => {
        const inputText = encodeMessage.value;
        encodeMessage.value = "";
        decodeMessage.textContent = changeMessage(inputText, 1);
    });
    decodeButton.addEventListener("click", () => {
        const decodedText = changeMessage(decodeMessage.value, -1);
        decodeMessage.value = decodedText;
    })
}

//using map:
// function encodeAndDecodeMessages() {
//     function encode(event) {
//         const textArea = event.target.parentElement.querySelector('textarea');
//         const asciiChars = Array.from(textArea.value).map(
//             el => String.fromCharCode(el.charCodeAt(0) + 1)
//         );
//         document.querySelectorAll('textarea')[1].value = asciiChars.join('');
//         textArea.value = '';
//     }

//     function decode(event) {
//         const textArea = event.target.parentElement.querySelector('textarea');
//         const asciiChars = Array.from(textArea.value).map(
//             el => String.fromCharCode(el.charCodeAt(0) - 1)
//         );
//         textArea.value = asciiChars.join('');
//     }

//     const [encodeBttn, decodeBttn] = document.querySelectorAll('button');
//     encodeBttn.addEventListener('click', encode);
//     decodeBttn.addEventListener('click', decode);
// }


function encodeAndDecodeMessages() {
    const [encodeMssg, decodeMssg] = document.querySelectorAll('textarea');
    const [encodeButton, decodeButton] = document.querySelectorAll('button');
  
    encodeButton.addEventListener('click', () => {
      let encodedMessage = '';
  
      [...encodeMssg.value].forEach((char) => {
        encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
      });
  
      decodeMssg.value = encodedMessage;
      encodeMssg.value = '';
    });
  
    decodeButton.addEventListener('click', () => {
      let decodedMessage = '';
  
      [...decodeMssg.value].forEach((char) => {
        decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
      });
  
      decodeMssg.value = decodedMessage;
    });
  }