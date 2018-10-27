<template>
    <div class="nav">
        <div class="nav-all">课</div>
        <scroll class="nav-scroll">
            <ul>
                <li>11111</li>
            </ul>
        </scroll>
        <div class="nav-more">
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'navt'
}
</script>
<style>
    .nav{
        width: 100%;
        height:100%;
        display:flex;
    }
    .nav .nav-all{
        width: 60px;
        height:100%;
        background-color: #fff;
        text-align:center;
        line-height:50px;
        font-size:15px;
        font-weight:700;
    }
    .nav .nav-scroll{
        flex:1;
    }
    .nav .nav-more{
        width: 70px;
        height:100%;
        background-color: #fff;
        line-height:50px;
        font-size:15px;
        font-weight:700;
    }

</style>


