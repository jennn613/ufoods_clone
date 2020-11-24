'use strict';

const headerLogo = document.querySelector('.header_logo'); //logo div
const headerLogoA = headerLogo.querySelector('a'); //logo a
const headerLogoImg = headerLogoA.querySelector('img'); //logo a img
const homeWrap = document.querySelector('.article_home_img'); //home 

document.addEventListener('scroll', () => {

    if(window.scrollY >  homeWrap.getBoundingClientRect().height){
        
        headerLogo.classList.add('hideAction');
        // setTimeout(()=>{
            // headerLogoImg.style.width = 0;
            // headerLogo.style.display = 'none';
        // }, 500);

        
    } else {

        headerLogoImg.style.width = 100 + 'px';
        headerLogo.style.display = 'block';
         headerLogo.classList.remove('hideAction');
    }
    });


    //slider 

    const homeImg = document.querySelector('.home_backgorund_img');
    const indicatorWrap = document.querySelector('.home_img_indicator_wrap'); //indi 감싼 ul
    const indicator = indicatorWrap.querySelectorAll('li'); //indicator
    let picNum = 4; //home 사진 개수

    
    indicator.forEach((indi)=>{
indi.classList.remove('active');
    });

function homeImgChange(){
    
setTimeout(()=>{     
    
    for(let i=1; i<=picNum; i++){
    homeImg.style.backgroundImage = "url('../css/img/banner-0"+i+".jpg')";
    
    indicator.forEach((indi)=>{
        indi.classList.remove('active');
            });

    indicator[i-1].classList.add('active');
}
}, 4000);

       


}
    homeImgChange();