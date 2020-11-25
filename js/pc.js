'use strict';

const header = document.querySelector('.header_nav_menu'); //header
const headerLogo = document.querySelector('.header_logo'); //logo div
const headerLogoA = headerLogo.querySelector('a'); //logo a
const headerLogoImg = headerLogoA.querySelector('img'); //logo a img
const homeWrap = document.querySelector('.article_home_img'); //home 
const homeIntro = document.querySelector('.home_img_company_intro'); //동그라미
const safetyWrap = document.querySelector('.article_safety'); //safety wrap
const newsWrap = document.querySelector('.article_news'); // news wrap
const worksWrap = document.querySelector('.article_works'); // works wrap
const imgBtn = document.querySelectorAll('.imgBtn'); //img button

    document.addEventListener('scroll', () => {
    if(window.scrollY >  newsWrap.getBoundingClientRect().height){

        headerLogo.classList.remove('showAction');
        headerLogo.classList.add('hideAction');

    } 
    else {

        headerLogo.classList.remove('hideAction');
        headerLogo.classList.add('showAction');

    }
    });

    homeIntro.addEventListener('mouseenter', ()=> {

        homeIntro.style.transform = 'translateY(-10px)';
        homeIntro.style.transition = 'all 400ms ease-in';
        
    });

    homeIntro.addEventListener('mouseleave', ()=> {

        homeIntro.style.transform = 'translateY(0)';
        homeIntro.style.transition = 'all 400ms ease-in';
        
    });

    //slider 

    const homeImg = document.querySelector('.home_backgorund_img');
    const indicatorWrap = document.querySelector('.home_img_indicator_wrap'); //indi 감싼 ul
    const indicator = indicatorWrap.querySelectorAll('li'); //indicator
    let picNum = 4; //home 사진 개수
    let idx = 0;
    
    indicator.forEach((indi)=>{
indi.classList.remove('active');
    });

    indicator[idx].classList.add('active');

function homeImgChange(){

    homeImg.style.transition = 'all 1800ms linear';

    indicator.forEach((indi)=>{
        indi.classList.remove('active');
            });

    indicator[idx].classList.add('active');

    function fadeOut() {
        homeImg.style.transform = 'scale(1.2)';
        homeImg.style.opacity = 0.3;
    }
    
setTimeout(() => {
    homeImg.style.backgroundImage = "url('../css/img/banner-02.jpg')";
    fadeOut();
}, 3000);

setTimeout(() => {
    homeImg.style.backgroundImage = "url('../css/img/banner-03.jpg')";
    fadeOut();
}, 6000);

setTimeout(() => {
    homeImg.style.backgroundImage = "url('../css/img/banner-04.jpg')";
    fadeOut();
}, 8000);


   // for(let i=1; i<=picNum; i++){

   // homeImg.style.backgroundImage = "url('../css/img/banner-0"+i+".jpg')";
//}


}
    homeImgChange();
    

    // contents fade in 


    document.addEventListener('scroll', ()=> {

        if(window.scrollY > newsWrap.getBoundingClientRect().bottom){

            safetyWrap.style.transition = 'all 600ms ease-in';           
            safetyWrap.style.transform = 'translateY(0)';
            safetyWrap.style.opacity = 1;

        }
        else {

            safetyWrap.style.transition = 'all 500ms ease-in';  
            safetyWrap.style.transform = 'translateY(80px)';
            safetyWrap.style.opacity = 0.4;
 
        }

        if(window.scrollY > safetyWrap.getBoundingClientRect().bottom + 400){

            worksWrap.style.transition = 'all 600ms ease-in';           
            worksWrap.style.transform = 'translateY(0)';
            worksWrap.style.opacity = 1;

        }
        else {

            worksWrap.style.transition = 'all 500ms ease-in';  
            worksWrap.style.transform = 'translateY(80px)';
            worksWrap.style.opacity = 0.4;
 
        }
    });

    imgBtn.forEach((btn)=> {

        btn.addEventListener('mouseenter', ()=> {
        
            btn.style.transform = 'translateX(10px)';
            btn.style.transition = 'all 500ms ease-in-out'; 

        });

        btn.addEventListener('mouseleave', ()=> {
        
            btn.style.transform = 'translateX(0)';
            btn.style.transition = 'all 500ms ease-in-out'; 

        });
    }); 
    
    //to the top
    const topBtn = document.querySelector('.topBtn');

    topBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        window.scrollTo({top: 0, behavior:'smooth'});
    });