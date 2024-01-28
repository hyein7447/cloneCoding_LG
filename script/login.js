const user_id = document.querySelector('#user_id')
const login_id = document.querySelector('.login_id')
const error = document.querySelector('.login_id span')
let id_input = Number(user_id.value)
console.log(user_id, login_id, error, id_input)

// 아이디가 휴대폰번호일 경우 11자리 미만, 초과시 에러메세지
user_id.addEventListener('blur',()=>{
    if(user_id.value.length < 11){
        error.innerText = '휴대폰 번호 아이디를 정확하게 입력해 주세요.'
    }else if(user_id.value.length > 11){
        error.innerText = '휴대폰 번호 아이디를 정확하게 입력해 주세요.'
    }else if(user_id.value.length = 11){
        error.style.display = 'none'
    }
})
