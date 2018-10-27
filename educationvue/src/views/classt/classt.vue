<template>
    <div class="classt">
        <div class="cla-nav">
            <navt :navdata="navdata"></navt>
            <div class="cla-more">
                <span>高二</span>
                <i class="iconfont icon-xiajiantou"></i>
            </div>
        </div>
        <div class="cla-swiper">
            <swipers :swiperdata="swiperdata"></swipers>
            <div class="cla-search">
                <div class="cla-find">
                    <i class="iconfont icon-chazhao"></i>
                    <input type="text" placeholder="搜索课程">
                    <i class="iconfont icon-yuyin"></i>
                </div>
            </div>
        </div>

        <div class="cla-nav">
            <navt :navdata="navdatas"></navt>
            <div class="cla-more">
                <span>筛选</span>
                <i class="iconfont icon-shaixuan"></i>
            </div>
        </div>

        <div class="cla-class">
            <ul class="cla-one">
                <li>

                </li>
            </ul>
        </div>

        <div class="cla-list">
            <ul class="cla-ul">
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
import navt from '../../components/base/navt.vue'
import swipers from '../../components/base/swipers.vue'
export default {
    name: 'classt',
    data () {
        return {
            swiperdata: [],
            navdata: [],
            navdatas: []
        }
    },
    components: {
        navt,
        swipers
    },
    mounted () {
        this.$axios.get('/apis/navData.json').then( (res) => {
            console.log(res.data)
            this.navdata = res.data.nav.title.content
            this.navdatas = res.data.nav.title1.content
            this.swiperdata = res.data.swiper
            console.log(this.swiperdata)
        })
    }

}
</script>
<style>
    .classt{
        widows: 100vw;
        height:100vh;
        display:flex;
        flex-direction: column;
    }
    .classt .cla-nav{
        width: 100vw;
        height:50px;
        display:flex;
    }
    .classt .cla-more{
        width:70px;
        height:50px;
        background: #fff;
        text-align:center;
        color:#a9a9a9;
    }
    .classt .cla-more span{
        font-size:15px;
        font-weight:900;
        line-height:50px;
    }
    .classt .cla-more i{
        font-size:16px;
        line-height:50px;
        font-weight:900;
    }
    .classt .cla-swiper{
        width: 100vw;
        height:200px;
        position: relative;
    }
    .classt .cla-search{
        width:100vw;
        height:56px;
        background-color: rgba(0,0,0,0.5);
        position:absolute;
        bottom:0;
        left:0;
        z-index:2;
    }
    .classt .cla-search .cla-find{
        width:90vw;
        height:30px;
        margin:13px auto;
        position: relative;
    }
    .classt .cla-search .cla-find input{
        width: 100%;
        height: 100%;
        outline:none;
        border:none;
        border-radius:4px;
        text-indent:2.5em;
    }
    .classt .cla-search .cla-find .icon-chazhao{
        font-size:17px;
        font-weight:700;
        position:absolute;
        top:5px;
        left:10px;
    }
    .classt .cla-search .cla-find .icon-yuyin{
        font-size:17px;
        font-weight:700;
        position:absolute;
        top:5px;
        right:10px;
    }
    .classt .cla-list{
        flex:1;
        display:flex;
    }
    .classt .cla-list .cla-ul{
        flex:1;
        list-style:none;
    }
    .classt .cla-list .cla-ul li{
        width: 90vw;
        height:120px;
        background-color: skyblue;
        margin:0 auto;
    }
</style>