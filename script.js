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

//function bokatKlart() {
    //alert("I am an alert box!");
//}

function promptMe() {
    document.getElementById("demo").innerHTML = "Hello World";
}

//burger 2 för mitt konto

// const nav2 = document.querySelector('.navLinks2')
// const burger2 = document.querySelector('.burger2')

// function togglemeny() {
//     nav2.classList.toggle('nav2Active')
//     burger2.classList.toggle('toggle')    
// }

// burger2.addEventListener('click', togglemeny)