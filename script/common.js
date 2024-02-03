// gnb_left 카테고리에 마우스 오버 시 하단 lnb_bg 팝업 출력
const gnb = document.querySelectorAll('.gnb_left li')
const lnb = document.querySelectorAll('.gnb_left .lnb_bg')
const lnb_top = document.querySelectorAll('.lnb_top div')
const lnb_btm = document.querySelectorAll('.lnb_btm')
const lnb_top_h = document.querySelectorAll('.lnb_top h2')
const lnb_top_active = document.querySelectorAll('.lnb_top div a')
console.log(gnb, lnb, lnb_top,lnb_btm, lnb_top_h, lnb_top_active)

// 초기 모두 숨김처리
for(let i of lnb){i.style.display ='none'}

// lnb_btm 부분 초기 모두 숨김처리, 첫번째 lnb_btm 출력
for(let l of lnb_btm){l.style.display = 'none'}


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

        gnb[i].children[0].classList.add('active_gnb')
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

    }) // lnb에 마우스 아웃 lnb_btm 숨김
/*     t.addEventListener('mouseout',()=>{
        for(let j of lnb_btm){j.style.display='none'}

    }) */
})

//초기 gnb 마우스 오버시 lnb_top 첫번째 active 활성화

gnb[0].addEventListener('mouseover',()=>{
    lnb_top_active[0].classList.add('active_lnb')
})
gnb[3].addEventListener('mouseover',()=>{
    lnb_top_active[11].classList.add('active_lnb')
})

// lnb_top 마우스 오버시 active_lnb 활성화 
lnb_top_active.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        lnb_top_active[i].classList.add('active_lnb')
    })
})
lnb_top_active.forEach((t,i)=>{
    t.addEventListener('mouseout',()=>{
        lnb_top_active[i].classList.remove('active_lnb')
    })
})

// lnb_btm 마우스 오버 시 acitve_lnb 활성화
lnb_btm[0].addEventListener('mouseover',()=>{
    lnb_top_active[0].classList.add('active_lnb')
})
lnb_btm[1].addEventListener('mouseover',()=>{
    lnb_top_active[1].classList.add('active_lnb')
})
lnb_btm[2].addEventListener('mouseover',()=>{
    lnb_top_active[2].classList.add('active_lnb')
})
lnb_btm[3].addEventListener('mouseover',()=>{
    lnb_top_active[3].classList.add('active_lnb')
})
lnb_btm[4].addEventListener('mouseover',()=>{
    lnb_top_active[4].classList.add('active_lnb')
})
lnb_btm[5].addEventListener('mouseover',()=>{
    lnb_top_active[5].classList.add('active_lnb')
})
lnb_btm[6].addEventListener('mouseover',()=>{
    lnb_top_active[6].classList.add('active_lnb')
})
lnb_btm[7].addEventListener('mouseover',()=>{
    lnb_top_active[7].classList.add('active_lnb')
})
lnb_btm[8].addEventListener('mouseover',()=>{
    lnb_top_active[8].classList.add('active_lnb')
})
lnb_btm[9].addEventListener('mouseover',()=>{
    lnb_top_active[9].classList.add('active_lnb')
})
lnb_btm[10].addEventListener('mouseover',()=>{
    lnb_top_active[10].classList.add('active_lnb')
})
lnb_btm[12].addEventListener('mouseover',()=>{
    lnb_top_active[11].classList.add('active_lnb')
})
lnb_btm[13].addEventListener('mouseover',()=>{
    lnb_top_active[12].classList.add('active_lnb')
})
lnb_btm[14].addEventListener('mouseover',()=>{
    lnb_top_active[13].classList.add('active_lnb')
})
lnb_btm[15].addEventListener('mouseover',()=>{
    lnb_top_active[14].classList.add('active_lnb')
})
lnb_btm[16].addEventListener('mouseover',()=>{
    lnb_top_active[15].classList.add('active_lnb')
})

// lnb_btm 마우스 오버 시 acitve_lnb 제거
lnb_btm[0].addEventListener('mouseout',()=>{
    lnb_top_active[0].classList.remove('active_lnb')
})
lnb_btm[1].addEventListener('mouseout',()=>{
    lnb_top_active[1].classList.remove('active_lnb')
})
lnb_btm[2].addEventListener('mouseout',()=>{
    lnb_top_active[2].classList.remove('active_lnb')
})
lnb_btm[3].addEventListener('mouseout',()=>{
    lnb_top_active[3].classList.remove('active_lnb')
})
lnb_btm[4].addEventListener('mouseout',()=>{
    lnb_top_active[4].classList.remove('active_lnb')
})
lnb_btm[5].addEventListener('mouseout',()=>{
    lnb_top_active[5].classList.remove('active_lnb')
})
lnb_btm[6].addEventListener('mouseout',()=>{
    lnb_top_active[6].classList.remove('active_lnb')
})
lnb_btm[7].addEventListener('mouseout',()=>{
    lnb_top_active[7].classList.remove('active_lnb')
})
lnb_btm[8].addEventListener('mouseout',()=>{
    lnb_top_active[8].classList.remove('active_lnb')
})
lnb_btm[9].addEventListener('mouseout',()=>{
    lnb_top_active[9].classList.remove('active_lnb')
})
lnb_btm[10].addEventListener('mouseout',()=>{
    lnb_top_active[10].classList.remove('active_lnb')
})
lnb_btm[12].addEventListener('mouseout',()=>{
    lnb_top_active[11].classList.remove('active_lnb')
})
lnb_btm[13].addEventListener('mouseout',()=>{
    lnb_top_active[12].classList.remove('active_lnb')
})
lnb_btm[14].addEventListener('mouseout',()=>{
    lnb_top_active[13].classList.remove('active_lnb')
})
lnb_btm[15].addEventListener('mouseout',()=>{
    lnb_top_active[14].classList.remove('active_lnb')
})
lnb_btm[16].addEventListener('mouseout',()=>{
    lnb_top_active[15].classList.remove('active_lnb')
})

// 작업중
