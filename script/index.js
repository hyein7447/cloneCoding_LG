const mySwiper = new Swiper('#mainslide1',{
    autoplay:{delay:1000,}, //자동 재생 (기본값 false)
    loop:true, //반복(기본값 false)
    direction:'horizontal', //방향 (기본값 horizontal ) 설정시 부모에 높이값도 같이 설정해야함 !
    //effect:'fade', //제자리 효과 (direction과 같이 쓸 수 없음)
    //effect:'cube', //큐브 돌아가는 효과 (부모에 overflow 빼기)
    //큐브 이펙트 설정 시 추가 옵션
    /*cubeEffect:{
        shadow:true, //규브 하단 그림자 (안보일거면 false)
        shadowOffset:30, //하단 그림자 y위치 (기본값 20)
        shadowScale:0.8, //하단 그림자 크기 (기본값1)
        slideShadows:true, // 다음 큐브 그림자 유무 (기본값 false)
    }, */
    grabCursor:true, //마우스 올리면 손모양 아이콘 변경하기
    //effect:'flip', //뒤집히면서 넘어가는 effect
    // 페이지 번호 표시하기 (HTML 태그 먼저 준비 후 작성)
    pagination:{
        //el:'#mainslide1 .swiper-pagination',
        //type:'bullets', //모양설정
        //el:'#mainslide1 .pagination_progress', //로딩HTML 연결
        //type:'progressbar', //로딩모양변경
        //페이지 모양을 자유롭게 변경하고 싶을 때
        el:'#mainslide1 .swiper-pagination',
        type:'bullets', //여기까진 위와 동일
        clickabel:true, //사용자 모양 클릭 가능한 설정
        renderBullet:function(i, name){//사용자 지정 함수생성
            console.log(i, name) // i는 인덱스, name은 page인식이름
            //return에서 원하는 태그 구현
            //return으로 생성한 태그에 클래스를 주면 css도 가능
            return `<span class="page_bar ${name}">${i+1}</span>`
        }
    }, //pagination 종료 위치
    //내비게이션 속성
    navigation:{
        nextEl:'#mainslide1 .swiper-button-next',
        prevEl:'#mainslide1 .swiper-button-prev',
    },
    //여러장의 슬라이드 보기
    direction:'horizontal', // 기본값이므로 생략 가능
    slidesPerView:2, // 한 화면 보이는 슬라이드 개수 (전체 슬라이드 개수보다 최소 1개 적게 작성해야함, 총 3개라면 최대 2개까지)
    spaceBetween:10, //슬라이드 사이 여백 (flex와 동일개념) (기본값 0)
})
//재생, 정지 버튼으로 swiper 제어하기
const pause_btn = document.querySelector('#pause')
const start_btn = document.querySelector('#start')
pause_btn.addEventListener('click',()=>{
    //정지하고 싶은 swiper를 가진 변수명 연결
    mySwiper.autoplay.stop()
})
start_btn.addEventListener('click',()=>{
    mySwiper.autoplay.start()
})