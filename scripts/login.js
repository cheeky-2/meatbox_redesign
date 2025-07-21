const writeInput = document.querySelectorAll('.write input');
const loginBtn = document.querySelector('.login_btn');
const snsBtn = document.querySelectorAll('.sns_wrap a');

for(let i of writeInput){
    i.addEventListener('focus',()=>{
        i.style.outline = '2px solid #DB3B3B'
    })
    i.addEventListener('blur',()=>{
        i.style.outline = '1px solid #bbb'
    })
}
const idInput = writeInput[0];
const pwInput = writeInput[1];
loginBtn.addEventListener('click',()=>{
    if(idInput.value == ''){
        alert('아이디를 입력해주세요');
    }else if(pwInput.value == ''){
        alert('비밀번호를 입력해주세요');
    }else{
        console.log(`아이디 : ${idInput.value}`);
        console.log(`비밀번호 : ${pwInput.value}`);
    }
})
for(let i of snsBtn){
    i.addEventListener('click',()=>{
        alert(`${i.children[1].textContent} 간편 회원가입`)
    })
}