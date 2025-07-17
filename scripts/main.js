/* const allMenu = document.querySelector('.gnb > li:nth-child(1)');
const lnb1 = document.querySelector('.lnb1');
const dangdang = document.querySelector('.gnb > li:nth-child(2)');
const lnb2 = document.querySelector('.lnb2');
const mAllMenu = document.querySelector('.m_icon button');
const mLnb1 = document.querySelector('.m_all_menu .lnb1');
const searchInput = document.querySelector('.search input'); */
const popupCloseBtn = document.querySelector('.popup button');
const popup = document.querySelector('.popup');
const DmainBn = document.querySelector('.d_main_bn');
const bnNextBtn = document.querySelector('.main_bn_btn .next_btn');
const bnBackBtn = document.querySelector('.main_bn_btn .back_btn');
const categoryLi = document.querySelectorAll('.category_container li');
const businessUser = document.querySelector('.business_user');
const individualUser = document.querySelector('.individual_user');
const bestProductTheme = document.querySelectorAll('.best_product_title button');
const userBestProduct1Title = document.querySelectorAll('.user_best_product_wrap button');
/* const topMoveNo = document.querySelectorAll('a');
const headerTop = document.querySelector('.header_top') */
/* lnb1.style.display = 'none';
lnb2.style.display = 'none';
mLnb1.style.display = 'none'; */
/* allMenu.addEventListener('click',()=>{
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
}) */
popupCloseBtn.addEventListener('click',()=>{
    popup.style.display = 'none';
})
const MainBn = new Swiper('.bener_wrap .swiper',{
    slidesPerView:1,
    autoplay:{delay:4000},
    loop:true,
    navigation:{
        nextEl:'.back_btn+.swiper-button-next',
        prevEl:'.main_bn .swiper-button-prev',
    },
});
let category = null;
function cotegortSwiper(){
    const screenWidth = window.innerWidth;
    if(screenWidth >= 773){
        if(!category){
            category = new Swiper('.category_wrap .swiper',{
                slidesPerView:6,
                breakpoints:{
                    1281:{
                        slidesPerView:8,
                    },
                },
                navigation:{
                    nextEl:'.category_btn_wrap .swiper-button-next',
                    prevEl:'.category_btn_wrap .swiper-button-prev',
                },
            });
        }
    }else{
        if(category){
            category.destroy(true, true);
            category = null;
        }
    }
}
window.addEventListener('load', cotegortSwiper);
window.addEventListener('resize', cotegortSwiper);
/* const category = new Swiper('.category_wrap .swiper',{
    slidesPerView:6,//모바일
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
}) */
businessUser.addEventListener('click',()=>{
    individualUser.style.fontWeight = '400';
    businessUser.style.fontWeight = '600';
})
individualUser.addEventListener('click',()=>{
    individualUser.style.fontWeight = '600';
    businessUser.style.fontWeight = '400';
})
for(let i = 0; i < 6; i++){
    bestProductTheme[i].addEventListener('click',()=>{
        for(let i of bestProductTheme){
            i.style.backgroundColor = '#fff'
            i.style.color = '#000';
        }
        if(bestProductTheme[i].style.backgroundColor = '#fff'){
            bestProductTheme[i].style.backgroundColor = '#DC2525';
            bestProductTheme[i].style.color = '#fff';
        }
    })
}
let userBestProduct1 = null;
function userBestSwiper1(){
    const screenWidth = window.innerWidth;
    if(screenWidth >= 773){
        if(!userBestProduct1){
            userBestProduct1 = new Swiper('.s1 .user_best_product_contents .user_best_product_list_container',{
                slidesPerView:1,
                breakpoints:{
                    772:{
                        slidesPerView:2,
                    },
                },
                spaceBetween:12,
                navigation:{
                    nextEl:'.s1 .product_slide_nav button:last-child',
                    prevEl:'.s1 .product_slide_nav button:first-child',
                },
                loop:true,
            })
        }
    }else{
        if(userBestProduct1){
            userBestProduct1.destroy(true, true);
            userBestProduct1 = null;
        }
    }
}
window.addEventListener('load', userBestSwiper1);
window.addEventListener('resize', userBestSwiper1);
let userBestProduct2 = null;
function userBestSwiper2(){
    const screenWidth = window.innerWidth;
    if(screenWidth >= 773){
        if(!userBestProduct2){
            userBestProduct2 = new Swiper('.s2 .user_best_product_contents .user_best_product_list_container',{
                slidesPerView:1,
                breakpoints:{
                    772:{
                        slidesPerView:2,
                    },
                },
                spaceBetween:12,
                navigation:{
                    nextEl:'.s2 .product_slide_nav button:last-child',
                    prevEl:'.s2 .product_slide_nav button:first-child',
                },
                loop:true,
            })
        }
    }else{
        if(userBestProduct2){
            userBestProduct2.destroy(true, true);
            userBestProduct2 = null;
        }
    }
}
window.addEventListener('load', userBestSwiper2);
window.addEventListener('resize', userBestSwiper2);
let userBestProduct3 = null;
function userBestSwiper3(){
    const screenWidth = window.innerWidth;
    if(screenWidth >= 773){
        if(!userBestProduct3){
            userBestProduct3 = new Swiper('.s3 .user_best_product_contents .user_best_product_list_container',{
                slidesPerView:1,
                breakpoints:{
                    772:{
                        slidesPerView:2,
                    },
                },
                spaceBetween:12,
                navigation:{
                    nextEl:'.s3 .product_slide_nav button:last-child',
                    prevEl:'.s3 .product_slide_nav button:first-child',
                },
                loop:true,
            })
        }
    }else{
        if(userBestProduct3){
            userBestProduct3.destroy(true, true);
            userBestProduct3 = null;
        }
    }
}
window.addEventListener('load', userBestSwiper3);
window.addEventListener('resize', userBestSwiper3);

for(let i = 0; i < 3; i++){
    userBestProduct1Title[i].addEventListener('click',()=>{
        for(let i of userBestProduct1Title){
            i.style.color = '#555';
        }
        userBestProduct1Title[i].style.color = '#000';
        userBestProduct1Title[i].style.fontWeight = '600';
    })
}
/* for(let i of topMoveNo){
    i.addEventListener('click',function(e){
        e.preventDefault();
    })
} */
