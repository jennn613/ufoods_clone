'use strict';

import {toggleClick} from "./mobile.js";
import {headerLogoShow, contentsFadeIn, homeIntroMove, homeImgShow,imgBtnMove, toTheTop} from "./pc.js";


function mediaSize() { 
    if ( window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches ) {
        // console.log('Mobile');
        toggleClick();
        headerLogoShow();
        contentsFadeIn();
        homeImgShow();
        homeIntroMove();
        imgBtnMove();
        toTheTop();
    } else if ( window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches ) {
        // console.log('Tablet');
        headerLogoShow();
        contentsFadeIn();
        homeImgShow();
        homeIntroMove();
        imgBtnMove();
        toTheTop();
    } else {
        // console.log('PC');
        headerLogoShow();
        contentsFadeIn();
        homeImgShow();
        homeIntroMove();
        imgBtnMove();
        toTheTop();
        //aFocus();
    }
};


window.addEventListener('resize', mediaSize);

mediaSize();