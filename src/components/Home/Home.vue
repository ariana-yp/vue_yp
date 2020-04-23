<template>
<div id="home">
    <!-- top -->
    <TopSearch></TopSearch>
    
    <div class="div-center">
        <div class="div-center-body">
            
            <!-- 轮播 -->
            <div class="div-area">
                <!-- Swiper -->
                <div class="swiper-container" id="swiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="m in ghf" :key="m.ID" >                        
                                <div class="banner-img">
                                    <img v-bind:src="m.TImgs[0].tURL" />                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 导航菜单 -->
            <div class="div-area">
                <div class="div-nva">
                    <div class="div-nva-cen">
                        <ul>
                            <li v-for="m in dhs" :key="m.ID">
                                <a v-bind:href="m.iURL">
                                    <div class="nva-card">
                                        <img v-bind:src="m.TImgs[0].tURL" />
                                        <p>{{m.Name}}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <br />
                    </div>
                </div>
            </div>

            <!-- 广告 -->
            <div class="div-area">
                <div class="h-title1">
                    <span class="sp-danger"><i class="iconfont icon-tixing5"></i></span>
                    <span>极光上新，体验不一样的极光之旅</span>
                    <span class="sp-primary2">查看详情<i class="el-icon-d-arrow-right"></i></span>
                </div>
                <!-- Swiper -->
                <div class="swiper-container" id="swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="m in gkp" :key="m.ID">
                            <a v-bind:href="m.iURL">
                                <div class="banner-img">
                                    <img v-bind:src="m.TImgs[0].tURL" style="border-radius: 0.1332rem;" />
                                    <!--<img src="~/Images/test/01banner.png" style="border-radius: 0.1332rem;" />-->
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
            <div class="div-area3">
            <div class="h-title2">
                <span v-bind:class="{'sp-act':tabname=='限时抢购'}" v-on:click="seltab('限时抢购')">限时抢购</span>
                <span class="sp-cc">|</span>
                <span v-bind:class="{'sp-act':tabname=='人气推荐'}" v-on:click="seltab('人气推荐')">人气推荐</span>
                <span class="sp-cc">|</span>
                <span v-bind:class="{'sp-act':tabname=='尾单特价'}" v-on:click="seltab('尾单特价')">尾单特价</span>
                <span class="sp-cc">|</span>
                <span v-bind:class="{'sp-act':tabname=='新品首推'}" v-on:click="seltab('新品首推')">新品推荐</span>
                <a>
                    <span class="fz-24 sp-primary2"></span>
                </a>
            </div>
            <div class="div-trip-list">
                <ul>
                    <li v-for="m in tmitems" :key="m.ID">
                        <router-link tag="a" target="_blank" :to="{name:'details',params:{tripId:m.ID}}"  >
                            <div class="trip-card">
                                <div class="bg-TripTag2 fz-24"><span class="sale-tags2">7.8折</span></div>
                                <!-- <div class="trip-card-time">
                                    <p class="trip-card-time-p" v-show="tabname=='限时抢购'">
                                        <span class="sp-ff fz-24">距离结束</span>
                                        <span class="time-number">{{m.PMItem.PM.D}}</span>
                                        <span class="sp-ff fz-24">天</span>
                                        <span class="time-number">{{m.PMItem.PM.H}}</span>
                                        <span class="sp-ff fz-24">:</span>
                                        <span class="time-number">{{m.PMItem.PM.M}}</span>
                                        <span class="sp-ff fz-24">:</span>
                                        <span class="time-number">{{m.PMItem.PM.S}}</span>
                                    </p>
                                    <p class="trip-card-time-p" v-show="tabname=='人气推荐'" style="white-space:nowrap">
                                        <span class="sp-ff fz-22 service" v-for="t in m.TProductServices" :key="t.ID">{{t}}</span>
                                    </p>
                                    <p class="trip-card-time-p" v-show="tabname=='尾单特价'" style="white-space:nowrap">
                                        <span class="sp-ff fz-22 service" v-for="y in m.TFavouredPolicy" :key="y.ID">{{y}}</span>
                                    </p>
                                    <p class="trip-card-time-p" v-show="tabname=='新品首推'" style="white-space:nowrap">
                                        <span class="sp-ff fz-22">产品编号：{{m.TTripNO}}</span>
                                    </p>
                                </div> -->
                                <img class="img" v-bind:src="m.TTripImges[0].tURL" />
                                <h4>{{m.TName}}</h4>
                                <p>
                                    <span class="sp-price fz-30">￥{{m.MinPrice}}</span>
                                    <span class="fz-24 like-show">看相似</span>
                                </p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <br />
        </div>
            <!---->
        </div>
    </div>

    <!-- footer -->
    <FootSharde choose = 'home'></FootSharde>
</div>
</template>
<script>
//导入该组件中使用的子组件
//import FootSharde from '@/components/Sharde/FootSharde';
//import TopSearch from '@/components/Sharde/TopSearch';
import Swiper from 'swiper'


export default {
    name:'Home',
    data(){
        return{
            ghf: [],//首页轮播图
            gkp: [],//活动卡片
            gjx: [],//当季精选
            gzt: [],//主题旅行
            dhs: [],//首页导航

            tmitems:[],
            tabname: "人气推荐",
        }
    },
    components:{
       // TopSearch,  FootSharde
    },
    created:function(){
        this.getadverts();
        console.log(this.ghf)
    },
    mounted:function(){
        //避免在数据未完全渲染之前初始化swper,执行函数放在axios请求之后执行
        //this.myswiper1();
        //this.myswiper2();

        this.gettmitems();
        //this.reftimer();
    },
    methods:{
        myswiper1:function(){
            var swiper1 = new Swiper('#swiper1', {
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                },
            });
        },
         
        //广告 
        myswiper2:function(){
            var swiper2 = new Swiper('#swiper2', {
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
            });
        },

        //获取所有广告数据
        getadverts:function(){
            this.$axios.get('/API/AdvertItem/GetAllMB').then(res=>{
                //筛选数组
                this.ghf = res.data.filter(x => x.AdvertName == '首页轮播图');
                this.gkp = res.data.filter(x => x.AdvertName == '活动卡片');
                this.gjx = res.data.filter(x => x.AdvertName == '当季精选');
                this.gzt = res.data.filter(x => x.AdvertName == '主题旅行');
                this.dhs = res.data.filter(x => x.AdvertName == '首页导航');
                console.log(this.ghf); 
                setTimeout(() => {
                    this.myswiper1();
                    this.myswiper2();
                }, 0);
            })
            .catch(err=>{
                console.log('获取异常',err);
            })
        },

        //限时，特惠，尾单
        gettmitems: function () {
                this.$axios.get("/API/Trip/GetTripByLabel", {
                    params:{
                        code:this.tabname,
                        panum: 4, 
                        pg: 1
                    }
                }).then(res=>{
                    this.tmitems = res.data;
                    console.log(this.tmitems)
                    //console.log(this.tmitems[0].PMItem.PM.EndTime)
                })
                .catch(err=>{
                    console.log('获取异常',err)
                })
            },

        seltab: function (n) {
                this.tabname = n;
                //获取
                this.gettmitems();
            },
        
        //倒计时
            // reftimer: function () {
            //     this.tmitems.forEach(
            //         function (a) {
            //             if (a.PMItem.isValidity) {
            //                 if (a.PMItem.PM.S > 0) {
            //                     a.PMItem.PM.S--;
            //                 }
            //                 else {
            //                     a.PMItem.PM.S = 59;
            //                     if (a.PMItem.PM.M > 0) {
            //                         a.PMItem.PM.M--;
            //                     }
            //                     else {
            //                         a.PMItem.PM.M = 59;
            //                         if (a.PMItem.PM.H > 0) {
            //                             a.PMItem.PM.H--;
            //                         }
            //                         else {
            //                             a.PMItem.PM.H = 59;
            //                             if (a.PMItem.PM.D > 1) {
            //                                 a.PMItem.PM.D--;
            //                             }
            //                             else {
            //                                 a.PMItem.PM.D = 0;
            //                                 a.PMItem.PM.H = 0;
            //                                 a.PMItem.PM.M = 0;
            //                                 a.PMItem.PM.S = 0;
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     );
            //     setTimeout(this.reftimer, 1000);
            // },

    }
};
</script>
<style lang="css" scoped>
    
</style>
