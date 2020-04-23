<template>
<div id="模板">
    <TopSearch></TopSearch>
    <FootSharde></FootSharde>
</div>
</template>
<script>
//导入该组件中使用的子组件
import FootSharde from '@/components/Sharde/FootSharde';
import TopSearch from '@/components/Sharde/TopSearch';


export default {
    name:'Home',
    data(){
        return{
           
        }
    },
    components:{
        FootSharde,
        TopSearch
    },
    created:function(){
        
    },
    methods:{

    }
};
</script>
<style lang="css" scoped>

</style>