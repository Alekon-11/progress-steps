'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const prev = document.querySelector('#prev'),
          next = document.querySelector('#next'),
          progress = document.querySelector('#progress');
    let circles = document.querySelectorAll('.progress__circle');

    let index = 0;
    circles[index].classList.add('active');

    function movePosition(i = 0){
        circles = document.querySelectorAll('.progress__circle');

        console.log(i);

        if(i >= (circles.length - 1)){
            next.disabled = true;
        } else if(i <= 0) {
            prev.disabled = true;
        } else{
            prev.disabled = false;
            next.disabled = false;
        }

        let position = (i / (circles.length - 1) * 100);       
        progress.style.width = `${position}%`;
    }

    prev.addEventListener('click', () => {
        index--;

        circles[index + 1].classList.remove('active');
        movePosition(index);
    });

    next.addEventListener('click', () => {
        index++;

        circles[index].classList.add('active');
        movePosition(index);
    });

    movePosition();

});