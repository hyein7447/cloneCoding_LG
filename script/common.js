// gnb_left 카테고리에 마우스 오버 시 하단 lnb_bg 팝업 출력
const gnb = document.querySelectorAll('.gnb_left li')
const lnb = document.querySelectorAll('.gnb_left .lnb_bg')
const lnb_top = document.querySelectorAll('.lnb_top div')
const lnb_btm = document.querySelectorAll('.lnb_btm')
const lnb_top_h = document.querySelectorAll('.lnb_top h2')
console.log(gnb, lnb, lnb_top,lnb_btm, lnb_top_h,)

// 초기 모두 숨김처리
for(let i of lnb){i.style.display ='none'}
let active_h = ()=>{for(let h of gnb){h.children[0].classList.remove('active_gnb')}}

// lnb_btm 부분 초기 모두 숨김처리, 첫번째 lnb_btm 출력
for(let l of lnb_btm){l.style.display = 'none'}
lnb_btm[0].style.display ='flex'
lnb_btm[11].style.display ='flex'
lnb_btm[12].style.display ='flex'
lnb_btm[17].style.display ='flex'
lnb_btm[18].style.display ='flex'
lnb_btm[19].style.display ='flex'

//gnb 에 마우스 오버 시 하단 lnb 출력
gnb.forEach((t, i)=>{
    t.addEventListener('mouseover',()=>{
        for(let j of lnb){j.style.display='none'}
        lnb[i].style.display='block'
        lnb_btm[0].style.display ='flex'

        lnb_btm[11].style.display ='flex'
        lnb_btm[12].style.display ='flex'
        lnb_btm[17].style.display ='flex'
        lnb_btm[18].style.display ='flex'
        lnb_btm[19].style.display ='flex'
        
        console.log( gnb[i].children[0])
        gnb[i].children[0].classList.add('active_gnb')
        console.log('active_gnb')
    })
     //gnb 마우스 아웃 시 하단 lnb 숨김
    t.addEventListener('mouseout',()=>{
        for(let j of lnb){j.style.display='none'}
        gnb[i].children[0].classList.remove('active_gnb')
    })
})
 // lnb에 마우스 오버시 lnb_btm 출력
lnb_top.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        for(let j of lnb_btm){j.style.display='none'}
        lnb_btm[i].style.display='flex'

        lnb_top[i].children.classList.add('active_lnb')
        
    }) // lnb에 마우스 아웃 lnb_btm 숨김
    t.addEventListener('mousout',()=>{
        for(let j of lnb_btm){j.style.display='none'}
    })
})

