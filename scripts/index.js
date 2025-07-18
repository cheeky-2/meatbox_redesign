const allMenu = document.querySelector('.gnb > li:nth-child(1)');
const lnb1 = document.querySelector('.lnb1');
const dangdang = document.querySelector('.gnb > li:nth-child(2)');
const lnb2 = document.querySelector('.lnb2');
const mAllMenu = document.querySelector('.m_icon button');
const mLnb1 = document.querySelector('.m_all_menu .lnb1');
const searchInput = document.querySelector('.search #search_value');
const searchWrap = document.querySelector('.search');
const searchBtn = document.querySelector('.search .search_btn');
const headerTop = document.querySelector('.header_top');
const topMoveNo = document.querySelectorAll('a');
/* lnb2.style.display = 'none'; */
mLnb1.style.display = 'none';
allMenu.addEventListener('click',()=>{
    if(lnb1.style.opacity == 0){
        lnb1.style.opacity = 1;
        lnb1.style.transform = 'translateY(0) scaleY(1)';
    }else{
        lnb1.style.opacity = 0;
        lnb1.style.transform = 'translateY(-5px) scaleY(0)';
    }
})
dangdang.addEventListener('mouseover',()=>{
    lnb2.style.opacity = 1;
    lnb2.style.pointerEvents = 'auto';
    
})
dangdang.addEventListener('mouseout',()=>{
    lnb2.style.opacity = 0;
    lnb2.style.pointerEvents = 'none';
})
mAllMenu.addEventListener('click',()=>{
    if(mLnb1.style.display == 'none'){
        mLnb1.style.display = 'flex';
    }else{mLnb1.style.display = 'none';}
})
for(let i of topMoveNo){
    const href = i.getAttribute('href'); // 태그의 속성을 잡는다(내가 쓴값 그대로 인식하게 한다)
    i.addEventListener('click',function(e){
        if(href === '#'){
            e.preventDefault();
        }
    })
}
searchInput.addEventListener('focus',()=>{
    searchWrap.style.borderColor = '#f00';
})
searchInput.addEventListener('blur',()=>{
    searchWrap.style.borderColor = '#111';
})
searchBtn.addEventListener('click',()=>{
    console.log(`검색 내용 : ${searchInput.value}`);
})