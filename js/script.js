// 플러그인 연결 위한 코드
AOS.init();


// 상단 메뉴
const header = document.querySelector("#header");
const gnb = document.querySelectorAll(".gnb > li");
const subTit = document.querySelectorAll(".sub_tit li");
const subBg = document.querySelector(".sub_tit_wrap");
const sections = document.querySelectorAll("#section > .sections");
// 섹션의 위치값을 담아줄 배열변수
let secStart = [];

window.addEventListener("scroll",function(){
    // 현재 스크롤 위치를 담아줄 변수
    let scTop = window.scrollY;

    // 반복될 섹션의 범위를 지정하고 
    // 몇번째 섹션의 시작점인지 secStart[i] 배열변수로 담아준다
    for(let i = 0; i < sections.length; i++){
        secStart[i] = sections[i].offsetTop;
    }

    // 현재의 스크롤이 섹션의 첫번째 보다 크거나 같고
    // 섹션의 두번째 보다 작으면 실행한 코드
    if(scTop >= secStart[0] && scTop < secStart[1]){
        header.classList.remove("top");
        header.classList.remove("on");
        header.classList.remove("on2");
    }
    // 현재의 스크롤이 섹션의 두번째 보다 크거나 같고
    // 섹션의 다섯번째 보다 작으면 실행한 코드
    else if(scTop >= secStart[1] && scTop < secStart[3]){
        header.classList.remove("top");
        header.classList.add("on");
        // subBg.classList.add("on");
    }
    else if(scTop >= secStart[3] && scTop < secStart[6]){
        header.classList.remove("top");
        header.classList.add("on2");
        // subBg.classList.add("on");
    }
    else if(scTop >= secStart[6] && scTop < secStart[7]){
        header.classList.remove("top");
        header.classList.remove("on2");
        header.classList.add("on");
        // subBg.classList.add("on");
    }
    else{
        header.classList.remove("top");
        header.classList.remove("on");
        header.classList.add("on2");
        // subBg.classList.add("on");
    }
    // else if(scTop >= secStart[6]){
    //     header.classList.remove("on");
    //     header.classList.add("top");
    // }
});

for(let i = 0; i < subTit.length; i++){
    gnb[i].addEventListener("mouseenter",function(){
        for(let j = 0; j < subTit.length; j++){
            subTit[j].classList.remove("on");
    
        }
        subTit[i].classList.add("on");
    });
}

const slide = document.querySelector(".visual .slide");
const nextBtn = document.querySelector(".visual .next");
const prevBtn = document.querySelector(".visual .prev");
const pagers = document.querySelectorAll(".visual_pager li");




// $(document).ready(function(){

//     // 슬라이드 영역
//     let len = $(".visual_pager li").length;
//     let wid = $(".visual").width();
//     let sss = 0;

//     $(".next").click(function(){
//         if(sss == len-1){
//             sss = 0;
//         }
//         else{
//             sss++;
//         }
//         slideMove();
//     });

//     $(".prev").click(function(){
//         if(sss == 0){
//             sss = len-1;
//         }
//         else{
//             sss--;
//         }
//         slideMove();
//     });

//     $(".vs_page_line li").click(function(){
//         sss = $(this).index();
//         slideMove();
//     });

//     let autoSlide = setInterval(function(){
//         if(sss == len-1){
//             sss = 0;
//         }
//         else{
//             sss++;
//         }
//         slideMove();
//     }, 3000);

//     $(".visual").mouseenter(function(){
//         clearInterval(autoSlide);
//     });

//     $(".visual").mouseleave(function(){
//         autoSlide = setInterval(function(){
//         if(sss == len-1){
//             sss = 0;
//         }
//         else{
//             sss++;
//         }
//         slideMove();
//     }, 3000);

//     });

//     console.log(wid);


//     function slideMove(){
//         // $(".slide").stop().animate({"margin-left": -wid*sss});
//         $(".slide").style.marginLeft = -100 * 현재페이지번호 + "%";
//         $(".visual_pager li").removeClass("on");
//         $(".visual_pager li").eq(sss).addClass("on");
//         $(".vs_page_line li").removeClass("on");
//         $(".vs_page_line li").eq(sss).addClass("on");
//     }

//     // visual영역에서 scroll down 버튼 클릭시 다음 섹션으로 이동
//     $(".down_btn").click(function(){
//         $("html,body").stop().animate({scrollTop:1000},500)
//     });


//     // 미션 숫자 카운트 영역
//     let a = 0;
//     $(window).scroll(function(){
//         let mTop = $(".mission").offset().top-window.innerHeight;
//         if(a == 0 && $(window).scrollTop() > mTop){
//             $('.counter-value').each(function() {
//                 let $this = $(this),
//                 countTo = $this.attr('data-count');
//                 $({countNum: $this.text()}).animate({
//                 countNum: countTo},
//                 {duration: 2000, easing: 'swing',
//                     step: function() {
//                         let num = numberWithCommas(Math.floor(this.countNum));
//                         $this.text(num);
//                     },
//                     complete: function() {

//                         let num = numberWithCommas(Math.floor(this.countNum));
//                         $this.text(num);
//                     }
//                 });
//             });

//             $(".now_dt").each(function(){
//                 let $this = $(this),
//                 countTo = $this.attr('data-count');
//                 $({countNum: $this.text()}).animate({
//                 countNum: countTo},
//                 {duration: 2000, easing: 'swing',
//                     step: function() {
//                         $this.text(Math.floor(this.countNum));
//                     },
//                     complete: function() {
//                         $this.text(this.countNum);
//                     }
//                 });
//             });

//         a = 1;

//             // 세자리마다 콤마
//             function numberWithCommas(x) {
//                 return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//             }
//         }
//     });


//     // 톤 크루 영역 bg 이미지가 스크롤 했을때 왼쪽에서 오른쪽으로 나타남
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 4000){
//             $(".crew_bg").css({"left":"0"});
//         }
//         else{

//         }
//     });



//     // 제품소개 아코디언 메뉴
//     $('.item_title').click(function(e){
//         e.preventDefault();
//         $('.item_box').stop().slideUp();

//         if ($(this).next('.item_box').is(':hidden')){
//             $(this).next('.item_box').stop().slideDown();
//             $(".item_title").children("span").css({"display":"none"});
//             $(this).children("span").css({"display":"inline-block"});
//             $(".item_title").children("a").css({"font-weight":"300"});
//             $(this).children("a").css({"font-weight":"400"});
//         } 
//         else{
//             $(this).next('.item_box').stop().slideUp();         
//         }
        
        

       
//     });

//     // 제품소개 이미지 슬라이드
//     let item = 0;
//     let item_wid = $(".pro_list li").width();
//     let itme_len = $(".pro_list li").length;
//     $(".item_txt li").click(function(e){
//         e.preventDefault();

//         item = $(this).index();
//         $(".pro_list").stop().animate({"margin-left":-item_wid * item});
//         $(".pro_list li").removeClass("on");
//         $(".pro_list li").eq(item).addClass("on");
//     });


//     // top 버튼 
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 4800 && $(this).scrollTop() < 8400){
//             $(".scr_up").addClass("on");
//         }
//         else{
//             $(".scr_up").removeClass("on");
//         }
        
//     });

//     $(".scr_up").click(function(){
//         $("html,body").stop().animate({scrollTop:0},500)
//     });

//     // 하단 footer 사업자정보 펼치고 접기
//     $(".f_inform_off").click(function(e){
//         e.preventDefault();
//         $(this).next(".f_txt").stop().slideDown();
//         $(this).removeClass("on");
//         $(".f_inform_on").addClass("on");
//     });

//     $(".f_inform_on").click(function(e){
//         e.preventDefault();
//         $(this).prev(".f_txt").stop().slideUp();
//         $(this).removeClass("on");
//         $(".f_inform_off").addClass("on");
//     })

// });



