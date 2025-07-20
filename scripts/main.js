const popupCloseBtn = document.querySelector('.popup button');
const popup = document.querySelector('.popup');
const DmainBn = document.querySelector('.d_main_bn');
const categoryLi = document.querySelectorAll('.category_container li');
const businessUser = document.querySelector('.business_user');
const individualUser = document.querySelector('.individual_user');
const bestProductTheme = document.querySelectorAll('.best_product_title button');
const userBestProduct1Title = document.querySelectorAll('.user_best_product_wrap button');
const bestProducts = document.querySelectorAll('.best_product_list li');
/* bestProducts.forEach((obj,idx)=>{
    console.log(obj.children[0].children[1].children[1].textContent);
    console.log('-----------------')
    console.log(bestProducts[idx].children[0].children[1].children[1].textContent);
    //console.log(porkMeat[idx].storage)
}) */
const cowMeat = [{
    src:'./images/product/sirloinmeat.png',
    storage:'냉장',
    from:'한우암소',
    kind:'원물',
    title:'등심 - 국산 | 1등급',
    weight:'kg당',
    price:49500,
    shipping:'무료배송',
    quantity:1,
},{
    src:'./images/product/neckmeat.png',
    storage:'냉장',
    from:'한우암소',
    kind:'원물',
    title:'목심 - 국산 | 1+등급',
    weight:'kg당',
    price:21800,
    shipping:'무료배송',
    quantity:1,
},{
    src:'./images/product/ribmeat.png',
    storage:'냉장',
    from:'한우암소',
    kind:'원물',
    title:'갈비살/늑간살(팩) - 국산 | 1등급',
    weight:'kg당',
    price:70000,
    shipping:'무료배송',
    quantity:1,
},{
    src:'./images/product/tenderloinmeat.png',
    storage:'냉장',
    from:'한우암소',
    kind:'원물',
    title:'안심 - 국산 | 1등급',
    weight:'kg당',
    price:62900,
    shipping:'무료배송',
    quantity:25,
}]
const porkMeat = [{
    src:'./images/product/userprodect_change_img/img1.jpg',
    storage:'냉장',
    from:'한돈',
    kind:'원물',
    title:'사태 - 국산',
    weight:'kg당',
    price:7800,
    shipping:'무료배송',
    quantity:14,
},{
    src:'./images/product/userprodect_change_img/img2.jpg',
    storage:'냉장',
    from:'한돈',
    kind:'원물',
    title:'후지 - 국산',
    weight:'kg당',
    price:6000,
    shipping:'무료배송',
    quantity:33,
},{
    src:'./images/product/userprodect_change_img/img3.png',
    storage:'냉장',
    from:'한돈',
    kind:'원물',
    title:'미박후지 - 국산',
    weight:'kg당',
    price:5200,
    shipping:'무료배송',
    quantity:75,
},{
    src:'./images/product/userprodect_change_img/img4.jpg',
    storage:'냉장',
    from:'한돈',
    kind:'원물',
    title:'미박삼겹살(암퇘지) - 국산',
    weight:'kg당',
    price:19800,
    shipping:'무료배송',
    quantity:19,
}]
const duckMeat = [{
    src:'./images/product/userprodect_change_img/img5.png',
    storage:'냉동',
    from:'국산오리',
    kind:'원물',
    title:'오리 목살 5kg*1개입 - 국산',
    weight:'kg당',
    price:6430,
    shipping:'무료배송',
    quantity:2492,
},{
    src:'./images/product/userprodect_change_img/img6.jpg',
    storage:'냉동',
    from:'국산오리',
    kind:'원물',
    title:'오리 안심 5kg*1개입 - 국산',
    weight:'kg당',
    price:9650,
    shipping:'무료배송',
    quantity:40,
},{
    src:'',
    storage:'',
    from:'',
    kind:'',
    title:'',
    weight:'',
    price:'',
    shipping:'',
    quantity:'',
},{
    src:'',
    storage:'',
    from:'',
    kind:'',
    title:'',
    weight:'',
    price:'',
    shipping:'',
    quantity:'',
}]
const chickenMeat = [{
    src:'./images/product/userprodect_change_img/img7.jpg',
    storage:'냉장',
    from:'국산계육',
    kind:'세절&분쇄',
    title:'닭윙 2kg*5 - 국산',
    weight:'',
    price:117000,
    shipping:'무료배송',
    quantity:294,
},{
    src:'./images/product/userprodect_change_img/img8.jpeg',
    storage:'냉장',
    from:'국산계육',
    kind:'세절&분쇄',
    title:'닭도리육 1kg*10 - 국산',
    weight:'',
    price:61000,
    shipping:'무료배송',
    quantity:246,
},{
    src:'./images/product/userprodect_change_img/img9.jpg',
    storage:'냉장',
    from:'국산계육',
    kind:'세절&분쇄',
    title:'근위 1kg*10 - 국산',
    weight:'',
    price:51000,
    shipping:'무료배송',
    quantity:241,
},{
    src:'./images/product/userprodect_change_img/img10.jpg',
    storage:'냉장',
    from:'국산계육',
    kind:'세절&분쇄',
    title:'닭가슴살 1kg*10 - 국산',
    weight:'',
    price:66000,
    shipping:'무료배송',
    quantity:260,
}]
const sheepMeat = [{
    src:'./images/product/userprodect_change_img/img11.jpg',
    storage:'냉동',
    from:'수입양',
    kind:'세절&분쇄',
    title:'프렌치드랙(갈비) - 호주',
    weight:'',
    price:57000,
    shipping:'무료배송',
    quantity:910,
},{
    src:'./images/product/userprodect_change_img/img12.jpg',
    storage:'냉동',
    from:'수입양',
    kind:'세절&분쇄',
    title:'어깨살 - 호주',
    weight:'kg당',
    price:13600,
    shipping:'무료배송',
    quantity:12,
},{
    src:'./images/product/userprodect_change_img/img13.jpg',
    storage:'냉동',
    from:'수입양',
    kind:'세절&분쇄',
    title:'작업 갈비살/늑간 - 호주',
    weight:'',
    price:34000,
    shipping:'무료배송',
    quantity:76,
},{
    src:'./images/product/userprodect_change_img/img14.jpg',
    storage:'냉동',
    from:'수입양',
    kind:'세절&분쇄',
    title:'숄더렉 - 호주',
    weight:'kg당',
    price:135600,
    shipping:'무료배송',
    quantity:61,
}]
const horseMeat = [{
    src:'',
    storage:'',
    from:'',
    kind:'',
    title:'',
    weight:'',
    price:'',
    shipping:'',
    quantity:'',
},{
    src:'',
    storage:'',
    from:'',
    kind:'',
    title:'',
    weight:'',
    price:'',
    shipping:'',
    quantity:'',
},{
    src:'',
    storage:'',
    from:'',
    kind:'',
    title:'',
    weight:'',
    price:'',
    shipping:'',
    quantity:'',
},{
    src:'',
    storage:'',
    from:'',
    kind:'',
    title:'',
    weight:'',
    price:'',
    shipping:'',
    quantity:'',
}]
const userProdectChange = [cowMeat,porkMeat,duckMeat,chickenMeat,sheepMeat,horseMeat];
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
businessUser.addEventListener('click',()=>{
    individualUser.style.fontWeight = '400';
    businessUser.style.fontWeight = '600';
})
individualUser.addEventListener('click',()=>{
    individualUser.style.fontWeight = '600';
    businessUser.style.fontWeight = '400';
})
function BestProductReaction(){
    const reaction = window.innerWidth;
    if(reaction >= 1280){
        bestProductTheme.forEach((obj,idx)=>{
            function productChange(){
                {bestProducts.forEach((obje,ind)=>{
                    obje.children[0].children[0].children[0].style.width = '270px';
                    obje.children[0].children[0].children[0].src = userProdectChange[idx][ind].src;
                    obje.children[0].children[1].children[1].textContent = userProdectChange[idx][ind].storage;
                    obje.children[0].children[1].children[3].textContent = userProdectChange[idx][ind].from;
                    obje.children[0].children[1].children[5].textContent = userProdectChange[idx][ind].kind;
                    obje.children[0].children[2].textContent = userProdectChange[idx][ind].title;
                    obje.children[0].children[3].children[0].textContent = userProdectChange[idx][ind].weight;
                    obje.children[0].children[3].children[1].textContent = `${userProdectChange[idx][ind].price.toLocaleString('ko-kr')}원`;
                    obje.children[0].children[4].children[0].textContent = userProdectChange[idx][ind].shipping;
                    obje.children[0].children[4].children[1].textContent = `재고 ${userProdectChange[idx][ind].quantity}박스`;
                    if(obj.textContent == '말고기'){
                        obje.style.display = 'none';
                    }else if(obj.textContent == '오리고기'){
                        bestProducts[ind].style.display = 'block';
                        bestProducts[2].style.display = 'none';
                        bestProducts[3].style.display = 'none';
                        obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                        bestProducts[0].parentNode.style.justifyContent = 'start';
                        bestProducts[0].parentNode.style.paddingLeft = '51px';
                    }else if(obj.textContent == '양고기'){
                        obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                        bestProducts[ind].style.display = 'block';
                    }else{
                        bestProducts[ind].style.display = 'block';
                        obje.children[0].children[1].children[0].src = './images/icon/water_icon.png';
                        bestProducts[0].parentNode.style.justifyContent = 'center';
                        bestProducts[0].parentNode.style.paddingLeft = '0px';
                    }
                })}
            }
            obj.addEventListener('click',()=>{
                for(let i of bestProductTheme){
                    i.style.backgroundColor = '#fff'
                    i.style.color = '#000';
                }
                if(obj.style.backgroundColor = '#fff'){
                    obj.style.backgroundColor = '#DC2525';
                    obj.style.color = '#fff';
                    productChange();
                }
            })
        })
    }else if(reaction >= 773){
        bestProductTheme.forEach((obj,idx)=>{
            function productChange(){
                {bestProducts.forEach((obje,ind)=>{
                    obje.children[0].children[0].children[0].style.width = '260px';
                    obje.children[0].children[0].children[0].src = userProdectChange[idx][ind].src;
                    obje.children[0].children[1].children[1].textContent = userProdectChange[idx][ind].storage;
                    obje.children[0].children[1].children[3].textContent = userProdectChange[idx][ind].from;
                    obje.children[0].children[1].children[5].textContent = userProdectChange[idx][ind].kind;
                    obje.children[0].children[2].textContent = userProdectChange[idx][ind].title;
                    obje.children[0].children[3].children[0].textContent = userProdectChange[idx][ind].weight;
                    obje.children[0].children[3].children[1].textContent = `${userProdectChange[idx][ind].price.toLocaleString('ko-kr')}원`;
                    obje.children[0].children[4].children[0].textContent = userProdectChange[idx][ind].shipping;
                    obje.children[0].children[4].children[1].textContent = `재고 ${userProdectChange[idx][ind].quantity}박스`;
                    if(obj.textContent == '말고기'){
                        obje.style.display = 'none';
                        bestProducts[0].parentNode.style.justifyContent = 'space-between';
                    }else if(obj.textContent == '오리고기'){
                        bestProducts[ind].style.display = 'block';
                        bestProducts[2].style.display = 'none';
                        bestProducts[3].style.display = 'none';
                        obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                        bestProducts[0].parentNode.style.justifyContent = 'start';
                        bestProducts[0].parentNode.style.paddingLeft = '0px';
                        bestProducts[0].style.marginRight = '24px';
                    }else if(obj.textContent == '양고기'){
                        obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                        bestProducts[ind].style.display = 'block';
                        bestProducts[0].parentNode.style.justifyContent = 'space-between';
                    }else{
                        bestProducts[ind].style.display = 'block';
                        obje.children[0].children[1].children[0].src = './images/icon/water_icon.png';
                        bestProducts[0].parentNode.style.justifyContent = 'space-between';
                        bestProducts[0].parentNode.style.paddingLeft = '0px';
                        bestProducts[0].style.marginRight = '0px';
                    }
                })}
            }
            obj.addEventListener('click',()=>{
                for(let i of bestProductTheme){
                    i.style.backgroundColor = '#fff'
                    i.style.color = '#000';
                }
                if(obj.style.backgroundColor = '#fff'){
                    obj.style.backgroundColor = '#DC2525';
                    obj.style.color = '#fff';
                    productChange();
                }
            })
        })
    }else{
        bestProductTheme.forEach((obj,idx)=>{
            function productChange(){
                {bestProducts.forEach((obje,ind)=>{
                    obje.children[0].children[0].children[0].style.width = '160px';
                    obje.children[0].children[0].children[0].src = userProdectChange[idx][ind].src;
                    obje.children[0].children[1].children[1].textContent = userProdectChange[idx][ind].storage;
                    obje.children[0].children[1].children[3].textContent = userProdectChange[idx][ind].from;
                    obje.children[0].children[1].children[5].textContent = userProdectChange[idx][ind].kind;
                    obje.children[0].children[2].textContent = userProdectChange[idx][ind].title;
                    obje.children[0].children[3].children[0].textContent = userProdectChange[idx][ind].weight;
                    obje.children[0].children[3].children[1].textContent = `${userProdectChange[idx][ind].price.toLocaleString('ko-kr')}원`;
                    obje.children[0].children[4].children[0].textContent = userProdectChange[idx][ind].shipping;
                    obje.children[0].children[4].children[1].textContent = `재고 ${userProdectChange[idx][ind].quantity}박스`;
                    if(obj.textContent == '말고기'){
                        obje.style.display = 'none';
                        bestProducts[0].parentNode.style.justifyContent = 'space-between';
                    }else if(obj.textContent == '오리고기'){
                        bestProducts[ind].style.display = 'block';
                        bestProducts[2].style.display = 'none';
                        bestProducts[3].style.display = 'none';
                        obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                        bestProducts[0].parentNode.style.justifyContent = 'space-between';
                        bestProducts[0].parentNode.style.paddingLeft = '0px';
                        bestProducts[0].style.marginRight = '0px';
                    }else if(obj.textContent == '양고기'){
                        obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                        bestProducts[ind].style.display = 'block';
                        bestProducts[2].style.display = 'none';
                        bestProducts[3].style.display = 'none';
                        bestProducts[0].parentNode.style.justifyContent = 'space-between';
                    }else{
                        bestProducts[ind].style.display = 'block';
                        bestProducts[2].style.display = 'none';
                        bestProducts[3].style.display = 'none';
                        obje.children[0].children[1].children[0].src = './images/icon/water_icon.png';
                        bestProducts[0].parentNode.style.justifyContent = 'space-between';
                        bestProducts[0].parentNode.style.paddingLeft = '0px';
                        bestProducts[idx].style.marginRight = '0px';
                    }
                })}
            }
            obj.addEventListener('click',()=>{
                for(let i of bestProductTheme){
                    i.style.backgroundColor = '#fff'
                    i.style.color = '#000';
                }
                if(obj.style.backgroundColor = '#fff'){
                    obj.style.backgroundColor = '#DC2525';
                    obj.style.color = '#fff';
                    productChange();
                }
            })
        })
    }
}
window.addEventListener('load', BestProductReaction);
window.addEventListener('resize', BestProductReaction);
/* bestProductTheme.forEach((obj,idx)=>{
    function productChange(){
        {bestProducts.forEach((obje,ind)=>{
            obje.children[0].children[0].children[0].src = userProdectChange[idx][ind].src;
            obje.children[0].children[1].children[1].textContent = userProdectChange[idx][ind].storage;
            obje.children[0].children[1].children[3].textContent = userProdectChange[idx][ind].from;
            obje.children[0].children[1].children[5].textContent = userProdectChange[idx][ind].kind;
            obje.children[0].children[2].textContent = userProdectChange[idx][ind].title;
            obje.children[0].children[3].children[0].textContent = userProdectChange[idx][ind].weight;
            obje.children[0].children[3].children[1].textContent = `${userProdectChange[idx][ind].price.toLocaleString('ko-kr')}원`;
            obje.children[0].children[4].children[0].textContent = userProdectChange[idx][ind].shipping;
            obje.children[0].children[4].children[1].textContent = `재고 ${userProdectChange[idx][ind].quantity}박스`;
            if(obj.textContent == '말고기'){
                obje.style.display = 'none';
            }else if(obj.textContent == '오리고기'){
                bestProducts[ind].style.display = 'block';
                bestProducts[2].style.display = 'none';
                bestProducts[3].style.display = 'none';
                obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                bestProducts[0].parentNode.style.justifyContent = 'start';
                bestProducts[0].parentNode.style.paddingLeft = '51px';
            }else if(obj.textContent == '양고기'){
                obje.children[0].children[1].children[0].src = './images/icon/ice_icon.png';
                bestProducts[ind].style.display = 'block';
            }else{
                bestProducts[ind].style.display = 'block';
                obje.children[0].children[1].children[0].src = './images/icon/water_icon.png';
                bestProducts[0].parentNode.style.justifyContent = 'center';
                bestProducts[0].parentNode.style.paddingLeft = '0px';
            }
        })}
    }
    obj.addEventListener('click',()=>{
        for(let i of bestProductTheme){
            i.style.backgroundColor = '#fff'
            i.style.color = '#000';
        }
        if(obj.style.backgroundColor = '#fff'){
            obj.style.backgroundColor = '#DC2525';
            obj.style.color = '#fff';
            productChange();
        }
    })
}) */
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