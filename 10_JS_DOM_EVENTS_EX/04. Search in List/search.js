// function search() {
//    let towns = Array.from(document.querySelectorAll("ul li"));
//    let searchText = document.getElementById("searchText").value;
//    let matches = 0;

//    towns.forEach((town) => {
//       town.style.textDecoration = "none";
//       town.style.fontWeight = "normal";
//       if (town.textContent===searchText) {
//          town.style.textDecoration = "underline";
//          town.style.fontWeight = "bold";
//          matches++;
//       };
//       });     
//    document.getElementById("result").textContent = `${matches} matches found`;
// }

//Note: It is necessary to clear the results of the previous search.

//According to the other text requirements:
function search() {
   const searchText = document.getElementById('searchText').value;
   const towns = Array.from(document.querySelectorAll('ul li'));
   let matches = 0;

   towns.forEach((town) => {
       if (town.textContent.includes(searchText)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
       };
   });

   document.getElementById('result').textContent = `${matches} matches found`;
};