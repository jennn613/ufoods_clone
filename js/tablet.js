'use strict';

import {newsWrap} from "./pc.js";

const navContactText = document.querySelectorAll('.header_nav_contacts_text') // span

export function headerMenuShow(){

  navContactText.forEach((text)=> {
    text.style.display = 'none'

    document.addEventListener('scroll', ()=>{
  if(window.scrollY >  newsWrap.getBoundingClientRect().height){

    text.style.transition = "height 500ms ease-in"
    text.style.height = 'auto';
    text.style.display = 'block';
 } 

 else {

    text.style.transition = "height 500ms ease-in"
    text.style.height = '0';
    text.style.display = 'none';

}

    });

  });

 }
 headerMenuShow();