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


//1. scale(1.2) > 2.opacity 0.2 & 다른 사진 미리 뒤에 보여야함 > 3. 다른 사진 z-index 주기  
// 반복

    const homeImgWrap = document.querySelector('.homeImg'); // img 감싼 div
    const homeImg = homeImgWrap.querySelectorAll('.home_background_img'); // 배경 이미지 삽입할 div
    const indicatorWrap = document.querySelector('.home_img_indicator_wrap'); //indi 감싼 ul
    const indicator = indicatorWrap.querySelectorAll('li'); //indicator
    let picNum = 4; //home 사진 개수
    let idx = 0;
    let time = 3000;

    indicator.forEach((indi)=>{
        indi.classList.remove('active');
    });

    indicator[idx].classList.add('active');
    
    let i = 0;

    homeImg.forEach((img, i)=> {
        img.style.zIndex = homeImg.length - i;
        homeImg[0].style.zIndex = 100;
    });
    
    setInterval(()=> {        
        
        indicator.forEach((indi)=>{
            indi.classList.remove('active');
        });
    
        indicator[idx].classList.add('active');
        
        homeImg[idx].style.transition =`all ${time}ms linear`;
        homeImg[idx].style.transform = 'scale(1.3)';
        homeImg[idx].style.opacity = '0';
    
        setTimeout( ()=>{

            let prePic =  idx;

            homeImg[prePic].style.zIndex = 0;
    
            idx++;

            if(idx >= homeImg.length -1){
                homeImg.forEach((img, i)=>{
                    img.style.zIndex = homeImg.length - i;
                });
            }
                  


            if(idx >= homeImg.length){    
                idx=0;
                indicator[idx].classList.add('active');
            } 
    
            homeImg.forEach( (img, i)=> {
                if(i !== prePic){
                    homeImg[idx].style.zIndex = 100;
                    img.style.transition = 'none';
                    img.style.transform = 'scale(1)';
                    img.style.opacity = 1;          
                }
            });
    
        }, time);
    
    
    }, time + 200);

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

        if(window.scrollY > worksWrap.getBoundingClientRect().bottom){

            worksWrap.style.transition = 'all 400ms ease-in';           
            worksWrap.style.transform = 'translateY(0)';
            worksWrap.style.opacity = 1;

        }
        else {

            worksWrap.style.transition = 'all 400ms ease-in';  
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