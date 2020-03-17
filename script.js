const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function togglemeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')    
}

burger.addEventListener('click', togglemeny)

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}