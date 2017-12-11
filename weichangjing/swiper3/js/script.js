var swiper = new Swiper('.swiper-container', {
    //设置滑动方向
    direction: 'vertical',
    //设置分页小按钮
    pagination: {
        el: '.swiper-pagination',
        //设置小圆点可以点击
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next'
    },
//swiper 动画插件引入
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }

});

var mp3=document.querySelector("#mp3");
var mp3btn=document.querySelector("#mp3btn");


//暂停音乐按钮
// mp3btn.style.animationPlayState="paused";
// // 旋转音乐按钮
// mp3btn.style.animationPlayState="running";
mp3btn.onclick=function(){
    if(mp3.paused){
        mp3btn.style.animationPlayState="running";
        mp3.play();
    }else{
        mp3btn.style.animationPlayState="paused";
        mp3.pause();
    }
}



