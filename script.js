const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function togglemeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')    
}

burger.addEventListener('click', togglemeny)

var modal = document.getElementById('id01');

//När man klickar utanför området stängs den ner
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
        alert(document.getElementById("myP").style.display);
}

function promptMe() {
    document.getElementById("demo").innerHTML = "Hello World";
}

