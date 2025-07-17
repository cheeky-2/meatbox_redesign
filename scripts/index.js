const allMenu = document.querySelector('.gnb > li:nth-child(1)');
const lnb1 = document.querySelector('.lnb1');
const dangdang = document.querySelector('.gnb > li:nth-child(2)');
const lnb2 = document.querySelector('.lnb2');
const mAllMenu = document.querySelector('.m_icon button');
const mLnb1 = document.querySelector('.m_all_menu .lnb1');
const searchInput = document.querySelector('.search input');
const searchWrap = document.querySelector('.search');
const headerTop = document.querySelector('.header_top')
const topMoveNo = document.querySelectorAll('a');
lnb1.style.display = 'none';
lnb2.style.display = 'none';
mLnb1.style.display = 'none';
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
for(let i of topMoveNo){
    const href = i.getAttribute('href'); // 태그의 속성을 잡는다(내가 쓴값 그대로 인식하게 한다)
    i.addEventListener('click',function(e){
        if(href === '#'){
            e.preventDefault();
        }
    })
}
searchWrap.style.borderColor = '#111'
searchInput.addEventListener('focus',()=>{
    searchWrap.style.borderColor = '#f00';
    console.log(0)
})
searchInput.addEventListener('blur',()=>{
    searchWrap.style.borderColor = '#111';
    console.log(1)
})