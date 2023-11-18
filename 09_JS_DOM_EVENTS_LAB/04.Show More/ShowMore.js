// function showText() {
//     document.getElementById("text").style.display = "inline";
//     document.getElementById('more').style.display = 'none';
// }


function showText() {
    document.getElementById("text").style.display = "inline";
    setTimeout(() => {
    document.getElementById('more').style.display = 'none'}, 2000);
}




// function showText() {
//     const elToShow = document.getElementById('text');
//     elToShow.style.display = 'block';

//     document.getElementById('more').style.display = 'none';
// }