

function solve() {

  
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  let words = text.split(' ').map(el => el.toLowerCase()); //each word of the words Array starts with a small letter;

  const textCaseMapper = {
      'Camel Case': (text) => {
          words = words.map((el, ind) => (ind > 0) ? el.charAt(0).toUpperCase() + el.slice(1) : el); //every word except the first one starts with a capital letter;
          return words.join('')
      },

      'Pascal Case': (text) => {
          words = words.map(el => el.charAt(0).toUpperCase() + el.slice(1));
          return words.join('')
      }
  };

  result.textContent = (convention in textCaseMapper) ? textCaseMapper[convention](text) : 'Error!'
}