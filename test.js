let blean = true  //참 - 재생
let a ='재생일시정지버튼DOM'

a.addEventListener('click',function(){
    blean = !blean 
    if(blean){//참 - 재생
        swiper.autoplay = pause
        a.innerHTML = '일시정지'
    }else{
        swiper.autoplay = start
        a.innerHMTL = '재생'
    }
})