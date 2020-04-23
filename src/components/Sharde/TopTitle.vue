<template>
    <div class="div-center">
    <div class="div-top-search">
        <div class="div-top-search-tx">
            <h2 v-on:click="goback()"><i class="iconfont icon-fanhui"></i></h2>
        </div>
        <div class="div-top-search-sh">
            <h2>{{title}}</h2>
        </div>
        <div class="div-top-search-sc">
            <router-link :to="{name:'home'}">
                <p><i class="iconfont icon-shouye"></i></p>                
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'TopTitle',
    data() {
        return {
            
        }
    },
    props:['title'],
    methods:{
        goback:function(){
            this.$router.back(-1)
        }
    }
}
</script>