
function createBubble() {
    const frame = document.querySelector('.frame');
    const createElement = document.createElement('span');
    let size = Math.random() * 60;

    createElement.style.width = 10 + size + 'px';
    createElement.style.height = 10 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    frame.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    } , 10000)
}

setInterval(createBubble , 100)

// DARK/LIGHT MODE TOGGLE

const toggle = document.getElementById('toggle');

toggle.addEventListener('click' , myFunction);
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 // MODAL JAVASCRIPT

let modal = document.getElementById("myModal"); // Get the modal
let btn = document.getElementById("myBtn"); // Get the button that opens the modal
let span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// FOR RESPONSIVE NAV-BAR
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    });


/*document.addEventListener('mousemove', function(e) {
    let frame = document.querySelector('.frame');
    let butterfly = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    butterfly.style.left = x + 'px';
    butterfly.style.top = y + 'px';

    let size = Math.random() * 80;
    butterfly.style.width = 20 + size+ 'px';
    butterfly.style.height = 20 + size+ 'px';


    frame.appendChild(butterfly);

    setTimeout(function(){
        butterfly.remove();
    }, 1000)
});*/