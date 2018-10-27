<template>
    <div class="classt">
        <div class="cla-nav">
            <navt></navt>
        </div>
    </div>
</template>
<script>
import navt from '../../components/base/navt.vue'
export default {
    name: 'classt',
    components: {
        navt
    }
}
</script>
<style>
    .classt{
        widows: 100vw;
    }
    .classt .cla-nav{
        width: 100vw;
        height:50px;
        background-color: gray;
    }
</style>