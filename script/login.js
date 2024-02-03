const user_id = document.querySelector('#user_id')
const login_id = document.querySelector('.login_id')
const error = document.querySelector('.login_id span')
let id_input = Number(user_id.value)
const regex_mail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
const regex_num = /^.{11}$/
console.log(user_id, login_id, error, id_input)
console.log(typeof id_input)
console.log(regex_mail.test('hyein7447@naver.com'))
console.log(regex_mail.test('hyein7447@nagfdg'))
console.log(regex_num.test('010844555800'))

// 이메일 아이디 로그인 시 이메일 형식이 아닐 경우 에러 메세지 출력 
user_id.addEventListener('blur',()=>{
    if(regex_mail.test(user_id.value)){
        error.style.display = 'none'
    }else{
        error.innerHTML = '이메일 아이디를 정확하게 입력해 주세요.'
    }
})
// 휴대폰 아이디 로그인시 숫자 11자리가 아닐 경우 에러 메시지 출력

/* user_id.addEventListener('blur',()=>{
    if(regex_num.test(Number(user_id.value))){
        error.style.display='none'
    }else{
        error.innerHTML = '휴대폰 번호 아이디를 정확하게 입력해 주세요.'
    }
}) */