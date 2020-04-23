<template>
    <div class="div-center">
        <div class="div-foot-menu">
            <ul>
                <li>
                    <router-link :to="{name:'home'}">
                        <div class="menu-card" v-bind:class="{'choosed':choose =='home'}">
                            <p class="menu-p1"><i class="iconfont icon-shouye"></i></p>
                            <p class="menu-p2">首页</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'address'}">
                        <div class="menu-card" v-bind:class="{'choosed':choose =='address'}">
                            <p class="menu-p1"><i class="iconfont icon-mudedi"></i></p>
                            <p class="menu-p2">目的地</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <a href="/home/address">
                        <div class="menu-card">
                            <p class="menu-p1"><i class="iconfont icon-zhuti-copy"></i></p>
                            <p class="menu-p2">主题旅行</p>
                        </div>
                    </a>
                </li>
                <li>
                    <router-link :to="{name:'myindex'}">
                        <div class="menu-card">
                            <p class="menu-p1"><i class="iconfont icon-zixun"></i></p>
                            <p class="menu-p2">咨询</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'login'}">
                        <div class="menu-card">
                            <p class="menu-p1"> <i class="iconfont icon-wode"></i></p>
                            <p class="menu-p2">我的</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <br />
        </div>
    </div>
</template>
<script>
export default {
    name:'FootSharde',
    data() {
        return {
            
        }
    },
    props:['choose'],
    methods:{  
        
      }
}
</script>