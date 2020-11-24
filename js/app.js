'use strict';

function mediaSize() { 
    if ( window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches ) {
        // console.log('Mobile');
    } else if ( window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches ) {
        // console.log('Tablet');
    } else {
        // console.log('PC');
    }
};


window.addEventListener('resize', mediaSize);

mediaSize();