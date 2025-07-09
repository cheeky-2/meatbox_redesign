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
const businessUser = document.querySelector('.business_user')
const individualUser = document.querySelector('.individual_user')
const bestProductTheme = document.querySelectorAll('.best_product_title button')
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
businessUser.addEventListener('click',()=>{
    individualUser.style.fontWeight = '400';
    businessUser.style.fontWeight = '600';
})
individualUser.addEventListener('click',()=>{
    individualUser.style.fontWeight = '600';
    businessUser.style.fontWeight = '400';
})
/* 클릭하면 클릭한 대상은 배경이 빨개지고 글자가 하얘진다 클릭 안한 대상은 배경이 하얘지고 글자가 까매진다 */
for(let i = 0; i < 6; i++){
    bestProductTheme[i].addEventListener('click',()=>{
        if(bestProductTheme[i].style.backgroundColor = '#fff'){
            bestProductTheme[i].style.backgroundColor = '#DC2525';
            bestProductTheme[i].style.color = '#fff';
            console.log(i)
        }
    })
}
/* const userBestProduct = new Swiper('.user_best_product_contents .swiper-container') */