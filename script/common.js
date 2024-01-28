// gnb_left 카테고리에 마우스 오버 시 하단 lnb_bg 팝업 출력
const gnb = document.querySelectorAll('.gnb_left li')
const lnb = document.querySelectorAll('.gnb_left .lnb_bg')
const lnb_top = document.querySelectorAll('.lnb_top a')
const lnb_btm = document.querySelectorAll('.lnb_btm')
console.log(gnb, lnb, lnb_top,lnb_btm)

// 초기 모두 숨김처리
for(let i of lnb){i.style.display ='none'}

//gnb 에 마우스 오버 시 하단 lnb
gnb.forEach((t, i)=>{
    t.addEventListener('mouseover',()=>{
        for(let j of lnb){j.style.display='none'}
        lnb[i].style.display='block'
    })
    lnb_top.forEach((t,i)=>{
        t.addEventListener('mouseover',()=>{
            for(let j of lnb_btm){j.style.display='none'}
            lnb_btm[i].style.display='flex'
        })
    })
})