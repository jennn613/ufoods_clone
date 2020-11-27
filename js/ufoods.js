'use strict';

import {toggleClick} from "./mobile.js";
import {headerLogoShow, contentsFadeIn, homeIntroMove, homeImgShow,imgBtnMove, toTheTop} from "./pc.js";


// function mediaSize() { 
//     if ( window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches ) {
//         // console.log('Mobile');
//         toggleClick();
//         headerLogoShow();
//         contentsFadeIn();
//         homeImgShow();
//         homeIntroMove();
//         imgBtnMove();
//         toTheTop();
//     } else if ( window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches ) {
//         // console.log('Tablet');
//         headerLogoShow();
//         contentsFadeIn();
//         homeImgShow();
//         homeIntroMove();
//         imgBtnMove();
//         toTheTop();
//     } else {
//         // console.log('PC');
//         headerLogoShow();
//         contentsFadeIn();
//         homeImgShow();
//         homeIntroMove();
//         imgBtnMove();
//         toTheTop();
//         //aFocus();
//     }
// };


// window.addEventListener('resize', mediaSize);

// mediaSize();



const deviceSize = [
    {type: 'mobile', size: 767},
    {type: 'tablet', size: 1024},
    {type: 'pc'}
];

const Resize = function(){
let browserWidth = window.innerWidth;
let type;

for(let i=0; i<deviceSize.length; i++){
    
    if(browserWidth<=deviceSize[i].size){
        type = deviceSize[i].type;
        toggleClick();
        break;
    }
    else {
        type = deviceSize[deviceSize.length-1].type;
        headerLogoShow();
        contentsFadeIn();
        homeIntroMove();
        homeImgShow();
        imgBtnMove();
        toTheTop();
    }
}
return type;
}

const beforeWidth = Resize();

window.addEventListener('resize', ()=> {
    let afterWidth = Resize();
    if (beforeWidth !== afterWidth){
        window.location.reload();
    }
    toggleClick();
    headerLogoShow();
    contentsFadeIn();
    homeIntroMove();
    homeImgShow();
    imgBtnMove();
    toTheTop();
});