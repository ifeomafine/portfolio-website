
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
    } , 4000)
}

setInterval(createBubble , 100)






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