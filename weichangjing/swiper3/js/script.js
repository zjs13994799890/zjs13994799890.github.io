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
});