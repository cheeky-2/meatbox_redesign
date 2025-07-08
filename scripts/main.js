const allMenu = document.querySelector('.gnb > li:nth-child(1)');
const lnb1 = document.querySelector('.lnb1');
const dangdang = document.querySelector('.gnb > li:nth-child(2)');
const lnb2 = document.querySelector('.lnb2');
const mAllMenu = document.querySelector('.m_icon button');
const mLnb1 = document.querySelector('.m_all_menu .lnb1');
const searchInput = document.querySelector('.search input');
const popupCloseBtn = document.querySelector('.popup button');
const popup = document.querySelector('.popup');
const DmainBn = document.querySelector('.d_main_bn');
const bnNextBtn = document.querySelector('.main_bn_btn .next_btn');
const bnBackBtn = document.querySelector('.main_bn_btn .back_btn');
const categoryLi = document.querySelectorAll('.category_container li')
const body = document.querySelector('body');
let num = 100;
lnb1.style.display = 'none';
lnb2.style.display = 'none';
mLnb1.style.display = 'none';
DmainBn.style.transition = 'all 1s';
allMenu.addEventListener('click',()=>{
    if(lnb1.style.display == 'none'){
        lnb1.style.display = 'flex';
    }else{lnb1.style.display = 'none';}
})
dangdang.addEventListener('mouseover',()=>{
    lnb2.style.display = 'flex';
})
dangdang.addEventListener('mouseout',()=>{
    lnb2.style.display = 'none';
})
mAllMenu.addEventListener('click',()=>{
    if(mLnb1.style.display == 'none'){
        mLnb1.style.display = 'flex';
    }else{mLnb1.style.display = 'none';}
})
popupCloseBtn.addEventListener('click',()=>{
    popup.style.display = 'none';
})
/* bnNextBtn.addEventListener('click',()=>{
    if(num < 300){
        DmainBn.style.transform = `translateX(-${num}%)`;
        num += 100;
        console.log(num,DmainBn);
    }
}) */
/* const mainBn = document.querySelectorAll('.swiper-container') */

const MainBn = new Swiper('.bener_wrap .swiper-container',{
    autoplay:{delay:4000},
    loop:true,
    navigation:{
        nextEl:'.back_btn+.swiper-button-next',
        prevEl:'.main_bn .swiper-button-prev',
    },
});
const category = new Swiper('.category_wrap .swiper-container',{
    slidesPerView:12,//모바일
    spaceBetween:16,
    breakpoints:{
        773:{
            slidesPerView:6,
        },
        1281:{
            slidesPerView:8,
        },
    },
    navigation:{
        nextEl:'.category_btn_wrap .swiper-button-next',
        prevEl:'.category_btn_wrap .swiper-button-prev',
    },
})
/* if(body.style.width='772px' > body.style.width ){
    const categoryContainer = document.querySelector('.category_container');
    const categoryView = document.querySelector('.category_view');
    for(const i of categoryLi){
        i.classList.remove('swiper-slide','slide1','slide2','slide3','slide4','slide5','slide6','slide7','slide8','slide9','slide10','slide11','slide12','swiper-slide-active','swiper-slide-next');
        i.style.width='50px';
        
    }
    for(let i=0; i<12; i++){
        categoryLi[i].classList.remove(`slide${i}`);
        console.log(categoryLi[i])
    }
    categoryContainer.classList.remove('swiper-wrapper');
    categoryContainer.removeAttribute('id');;
    categoryView.classList.remove('swiper-container','swiper-initialized','swiper-horizontal','swiper-backface-hidden');
} */