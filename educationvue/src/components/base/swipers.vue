<template>
    <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperdata" :key="index">
                <img :src="item.imgurl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name: 'swiper',
    props: {
        swiperdata: {
            type:Array,
            default () {
                return []
            } 
        }
    },
    components: {
        Swiper
    },
    mounted () {
        this.swiper()
    },
    methods: {
        swiper () {
            new Swiper('#swiper', {
                loop: true,
                pagination: '.swiper-pagination',
                autoplay: 2000,
                paginationClickable: true
            })
        }
    }
}
</script>
<style>
    @import'swiper/dist/css/swiper.min.css';
    .swiper-container{
        width: 100%;
        height: 100%;
    }
    .swiper-container img{
        width: 100%;
        height: 100%;
    }
    .swiper-container .swiper-pagination-bullet{
        background-color: rgb(255, 255, 255);
    }
    .swiper-container .swiper-pagination-bullet-active{
        width: 20px;
        border-radius:4px;
        background-color: #fff;
    }
</style>