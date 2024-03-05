let blean = true  //참 - 재생
let play_pause_btn = document.querySelector('.play-pause-btn')
console.log(play_pause_btn.children[0].src)

play_pause_btn.addEventListener('click',()=>{
    blean = !blean
    if(blean){
        main_bnr_swiper.autoplay.start();
        play_pause_btn.children[0].src = './images/icon/pause.svg'
    }else {
        main_bnr_swiper.autoplay.pause();
        play_pause_btn.children[0].src = './images/icon/play.svg'
    }
})