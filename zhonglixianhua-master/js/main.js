Vue.component("my-li",{
    props:["url","title","namber","rst"],
    template:`
        <li>
        <a :href="rst">
            <img :src="url">
            <p>{{title}}</p>
            <span>{{namber}}</span>
        </a>
        </li>
    `
});

var app=new Vue({
    el:"#app",
    data:{
        lifes:[
            {url:"img/11.jpg",title:"全国送花北京圣诞节鲜花速递同城上海红玫瑰花束深圳广州杭州成都",namber:"￥108.00",rst:"#"},
            {url:"img/12.jpg",title:"圣诞礼品鲜花速递同城深圳生日红玫瑰花礼盒福田罗湖南山龙岗全国",namber:"￥999.99"},
            {url:"img/13.jpg",title:"上海生日鲜花速递同城19朵香槟玫瑰花束礼盒北京杭州圣诞礼品送花",namber:"￥20.00"},
            {url:"img/14.jpg",title:"圣诞节全国送花上海鲜花速递同城生日99朵红玫瑰花束北京西安南京",namber:"￥218.00"},
            {url:"img/15.jpg",title:"全国生日手提鲜花花篮玫瑰花乔迁商务庆典北京深圳杭州花店送花",namber:"￥218.00"},
            {url:"img/16.jpg",title:"圣诞节玫瑰花礼盒生日鲜花速递同城全国送花北京上海广州深圳杭州",namber:"￥198.00"},
            {url:"img/17.jpg",title:"成都生日鲜花速递同城11朵蓝色妖姬蓝玫瑰花束青羊广州杭州圣诞节",namber:"￥188.00"},
            {url:"img/18.jpg",title:"深圳鲜花速递同城全国生日送花玫瑰百合花束上海北京杭州武汉广州",namber:"￥99.99"}
        ]
    }
});
//列表页-------------------------------
Vue.component("my-li",{
    props:["url","title","namber","nam","rst"],
    template:`
        <li>
        <a :href="rst">
            <img :src="url">
            <p>{{title}}</p>
            <span>{{namber}}</span>
            <a>{{nam}}</a>
        </a>
        </li>
    `
});

var app1=new Vue({
    el:"#app1",
    data:{
        lifes:[
            {url:"img/11.jpg",title:"全国送花北京圣诞节鲜花速递同城上海红玫瑰花束深圳广州杭州成都",namber:"￥108.00",nam:"月销45笔",rst:"shop.html"},
            {url:"img/12.jpg",title:"圣诞礼品鲜花速递同城深圳生日红玫瑰花礼盒福田罗湖南山龙岗全国",namber:"￥999.99",nam:"月销3789笔"},
            {url:"img/13.jpg",title:"上海生日鲜花速递同城19朵香槟玫瑰花束礼盒北京杭州圣诞礼品送花",namber:"￥20.00",nam:"月销521笔"},
            {url:"img/14.jpg",title:"圣诞节全国送花上海鲜花速递同城生日99朵红玫瑰花束北京西安南京",namber:"￥218.00",nam:"月销387笔"},
            {url:"img/15.jpg",title:"全国生日手提鲜花花篮玫瑰花乔迁商务庆典北京深圳杭州花店送花",namber:"￥218.00",nam:"月销565笔"},
            {url:"img/16.jpg",title:"圣诞节玫瑰花礼盒生日鲜花速递同城全国送花北京上海广州深圳杭州",namber:"￥198.00",nam:"月销96笔"},
            {url:"img/17.jpg",title:"成都生日鲜花速递同城11朵蓝色妖姬蓝玫瑰花束青羊广州杭州圣诞节",namber:"￥188.00",nam:"月销45笔"},
            {url:"img/18.jpg",title:"深圳鲜花速递同城全国生日送花玫瑰百合花束上海北京杭州武汉广州",namber:"￥99.99",nam:"月销152笔"},
            {url:"img/21.jpg",title:"韩式开业花篮乔迁庆典鲜花速递同城北京上海北京广州杭州花店送花",namber:"￥158.00",nam:"月销251笔"},
            {url:"img/22.jpg",title:"上海向日葵生日鲜花速递同城送花北京杭州深圳天津武汉圣诞节花束",namber:"￥168.88",nam:"月销1235笔"},
            {url:"img/23.jpg",title:"上海向日葵生日鲜花速递同城送花北京杭州深圳天津武汉圣诞节花束",namber:"￥198.88",nam:"月销459笔"},
            {url:"img/24.jpg",title:"成都鲜花速递同城店浪漫送女友11朵香槟玫瑰花束北京上海深圳广州",namber:"￥138.99",nam:"月销243笔"},
            {url:"img/25.jpg",title:"佛山生日鲜花速递同城红玫瑰花束广州深圳珠海江门圣诞节花店送花",namber:"￥299.99",nam:"月销545笔"},
            {url:"img/26.jpg",title:"合肥生日鲜花速递同城送花33朵香槟玫瑰花束天津大连福州苏州济南",namber:"￥288.88",nam:"月销300笔"},
            {url:"img/27.jpg",title:"东莞生日鲜花速递同城全国送花玫瑰花束礼盒长安厚街广州深圳上海",namber:"￥99.99",nam:"月销3笔"},
            {url:"img/28.jpg",title:"东莞生日鲜花速递同城全国送花玫瑰花束礼盒长安厚街广州深圳上海",namber:"￥218.88",nam:"月销45笔"}
        ]
    }
})



$(".item").eq(0).css("display","block");
$("nav ul li").each(function(){
    var i=$(this).index();
    $(this).click(function(){
        $("li").removeClass("cc");
        $(this).addClass("cc");
        $(".item").hide();
        $(".item").eq(i).show();
    })
})



new Vue({
    el: "#app2",
    data: {
        navlists: [
            {
                url:"img/11.jpg",
                text2:" 深圳生日红玫瑰花礼盒鲜花速递全国同城福田罗湖南山龙岗情人节 ",
                del:"¥699",
                price:"¥30"
            },
            {
                url:"img/12.jpg",
                text2:"  圣诞节全国送花上海鲜花速递同城生日99朵红玫瑰花束北京西安南京  ",
                del:"¥999",
                price:"¥50"
            },
            {
                url:"img/13.jpg",
                text2:"  上海生日鲜花速递同城19朵香槟玫瑰花束礼盒北京杭州圣诞礼品送花  ",
                del:"¥399",
                price:"¥90"
            }
        ]
    }
})

