'use strict';

const toggleBtn = document.querySelector('.header_toggle_btn'); //toggle
const toggleBtnLine = toggleBtn.querySelectorAll('div'); //toggle 막대기
const toggleMenu = document.querySelector('.header_toggle_btn_open'); // toggle menu wrap

toggleBtn.addEventListener('click', ()=> {

let a = window.getComputedStyle(toggleMenu).display === 'none';

    if(a){

        toggleBtn.style.backgroundColor = 'white';
    
        toggleBtnLine.forEach((div)=> {
        div.style.backgroundColor = '#2A8742';
        div.style.top = 50 + '%';
        div.style.left = 21 + 'px';
        });
    
        toggleBtnLine[0].style.transform = 'rotate(-40deg)';
        toggleBtnLine[1].style.transform = 'rotate(40deg)';
        
        toggleMenu.style.display= 'block';
        setTimeout(()=>{toggleMenu.style.opacity= 0.4;},50);
        setTimeout(()=>{toggleMenu.style.opacity= 0.7;},100);
        setTimeout(()=>{toggleMenu.style.opacity= 1;},120);

    }

    else {

        toggleBtn.style.backgroundColor = '#2A8742';
    
        toggleBtnLine.forEach((div)=> {
        div.style.backgroundColor = 'white';

        });
    
        toggleBtnLine[0].style.transform = 'rotate(0deg)';
        toggleBtnLine[0].style.top = 30 + 'px';
        toggleBtnLine[1].style.transform = 'rotate(0deg)';
        toggleBtnLine[1].style.top = 50 + 'px';

        toggleMenu.style.display= 'none';
        toggleMenu.style.opacity= 0;

    }
});