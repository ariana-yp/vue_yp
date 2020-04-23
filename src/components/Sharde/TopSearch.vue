<template>
    <div class="div-center">
      <div class="div-top-search">
            <div class="div-top-search-tx">
                    <img src="@/assets/Images/头像3.png" />
            </div>
            <div class="div-top-search-sh">
                <!-- <i class="el-icon-search"></i> -->
                <input type="search"  placeholder="城市/景点/产品编号..."  /><!--v-model="qry.val"  v-on:search="serach()" -->
            </div>
            <div class="div-top-search-sc">
                    <img src="@/assets/Images/购物车.png" />
                    <!-- <h6 class="h-shopnum" v-show="shopnum()>0">{{shopnum()}}</h6> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'TopSearch',
    data() {
        return {
            
        }
    },
}
</script>