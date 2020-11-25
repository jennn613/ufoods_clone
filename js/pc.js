'use strict';

const header = document.querySelector('.header_nav_menu'); //header
const headerLogo = document.querySelector('.header_logo'); //logo div
const headerLogoA = headerLogo.querySelector('a'); //logo a
const headerLogoImg = headerLogoA.querySelector('img'); //logo a img
const homeWrap = document.querySelector('.article_home_img'); //home 

// document.addEventListener('scroll', () => {

    // if(window.scrollY >  homeWrap.getBoundingClientRect().height){
        
    //     headerLogo.classList.add('hideAction');
    //     setTimeout(()=>{
    //         headerLogoImg.style.width = 0;
    //         headerLogo.style.display = 'none';
    //     }, 200);

        
    // } else {

    //     headerLogoImg.style.width = 100 + 'px';
    //     headerLogo.style.display = 'block';
    //     headerLogo.classList.remove('hideAction');
    // }
    // });

    document.addEventListener('scroll', () => {
    if(window.scrollY >  homeWrap.getBoundingClientRect().height){

        headerLogoImg.classList.remove('showAction');
        headerLogoImg.classList.add('hideAction');

        setTimeout(() => {
            headerLogo.style.width = '0';
        }, 230);
       
        
    } 
    else {

        headerLogoImg.classList.remove('hideAction');
        headerLogo.style.width = 100 + 'px';
        headerLogoImg.classList.add('showAction');

    }
    });

    //slider 

//     const homeImg = document.querySelector('.home_backgorund_img');
//     const indicatorWrap = document.querySelector('.home_img_indicator_wrap'); //indi 감싼 ul
//     const indicator = indicatorWrap.querySelectorAll('li'); //indicator
//     let picNum = 4; //home 사진 개수

    
//     indicator.forEach((indi)=>{
// indi.classList.remove('active');
//     });

// function homeImgChange(){
    
// setTimeout(()=>{ 
    
//     for(let i=1; i<=picNum; i++){
//     homeImg.style.backgroundImage = "url('../css/img/banner-0"+i+".jpg')";
   
//     indicator.forEach((indi)=>{
//         indi.classList.remove('active');
//             });

//     indicator[i-1].classList.add('active');
// }
// }, 4000);
//}
    // homeImgChange();
    

    // contents fade in 

    const safetyWrap = document.querySelector('.article_safety');

    safetyWrap.style.transform = 'translateY(50px)';
    
    //to the top
    const topBtn = document.querySelector('.topBtn');

    topBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        window.scrollTo({top: 0, behavior:'smooth'});
    });