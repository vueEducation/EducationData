<template>
    <div class="nav">
        <scroll class="nav-scroll" ref="scroll">
            <ul class="nav-list">
                <li v-for="(item,index) in navdata" :key="index">{{item.name}}</li>
            </ul>
        </scroll>
    </div>
</template>
<script>
export default {
    name: 'navt',
    props: {
        navdata: {
            type: Array,
            return () {
                []
            }
        }
    }
}
</script>
<style>
    .nav{
        flex:1;
        display:flex;
    }
    .nav .nav-scroll{
        flex:1;
        overflow:hidden;
    }
    .nav .nav-scroll  .nav-list{
        width:160%;
        height:50px;
        list-style:none;
        color:#9a9a9a;
        padding-left:20px;
    }
    .nav .nav-scroll  .nav-list li{
        float:left;
        line-height:50px;
        font-size:15px;
        font-weight:700;
        margin-right: 20px;
    }
</style>


