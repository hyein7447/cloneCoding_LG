// 제품/소모품 마우스오버 시 팝업 출력

// gnb의 부모를 잡고 변수생성
const gnb1 = document.querySelector('.gnb_left > li:nth-child(1)')
// lnb_bg의 모든 자식 querySelectorAll 설정
const lnb1 = gnb1.querySelectorAll('.lnb_bg')
console.log(gnb1, lnb1[0])

// lnb 전체 가리기 (querySelectorAll 에서 첫번째 li만 확인하기위해 index로 출력!)
lnb1[0].style.display = 'none'

gnb1.addEventListener('mouseover', function(){
    lnb1[0].style.display = 'block'
})

//제품/소모품 마우스아웃 시 팝업 사라짐
gnb1.addEventListener('mouseout', function(){
    lnb1[0].style.display = 'none'
})

// PC/모니터 마우스 오버/아웃 시 팝업 출력,사라짐
/* const lnb2 = gnb1.querySelector('.lnb_bg .lnb_wrap')
const lnb_btm2 = lnb2.querySelector('lnb_btm_2')
console.log(lnb2, lnb_btm2)

lnb2.addEventListener('mouseover', function(){
    lnb_btm2.style.display= 'grid'
})
 */