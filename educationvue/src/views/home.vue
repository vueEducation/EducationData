<template>
    <div class="home">
       <ul class="home-list">
           <li><router-link to="classt">
               <i class="iconfont icon-shipin"></i>
               <p>选课</p>
            </router-link></li>
            <li><router-link to="study">
                <i class="iconfont icon-dati"></i>
               <p>学习</p> 
            </router-link></li>
           <li><router-link to="find">
               <i class="iconfont icon-leida-faxian_o"></i>
               <p>发现</p>
            </router-link></li>
           <li><router-link to="me">
               <i class="iconfont icon-wo"></i>
               <p>我</p>
            </router-link></li>
       </ul>
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'home'
}
</script>
<style>
    .home{
        width: 100vw;
    }
    .home .home-list{
        list-style:none;
        width: 100vw;
        height:70px;
        background-color: #fff;
        position:fixed;
        bottom:0;
        left:0;
        display:flex;
        justify-content: space-around;
    }
    .home .home-list li{
        width: 25%;
        height:50px;
        text-align:center;
        margin-top:10px;
    }
    .home .home-list li a{
        text-decoration:none;
        color:#a7a7a7;
    }
    .home .home-list li a i{
        font-size:30px;
        color:#979797;
    }
    .home .home-list li a.router-link-exact-active.router-link-active{
        color:#eb3329;
    }
    .home .home-list li a.router-link-exact-active.router-link-active i{
        color:#eb3329;
    }
</style>
