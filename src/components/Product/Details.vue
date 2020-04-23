<template>
    <div>
        <TopTitle title="产品详情"></TopTitle>
        <div class="div-center">
            <div class="div-center-body">
                <div class="div-area">
                    <!-- Swiper -->
                    <div class="swiper-container" id="swiper11">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="m in item.TTripImges" :key="m.ID">
                                <div class="banner-img">
                                    <img v-bind:src="m.tURL" />
                                    <!-- <p class="p-left fz-20">团号：{{item.TTripNO}}</p>
                                    <p class="p-right fz-20">{{n+1}} / {{item.TTripImges.length}}</p> -->
                                </div>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-pagination-fraction p-right fz-20">
                            <span class="swiper-pagination-current"></span>
                             / 
                            <span class="swiper-pagination-total"></span>
                        </div>
                        <p class="p-left fz-20">团号：{{item.TTripNO}}</p>
                    </div>
                </div>

                <div class="div-area2">
                    <div class="detail-txt">
                        <h4>{{item.TName}}</h4>
                        <p>
                            <span class="fz-42 sp-price">￥{{item.MinPrice}}</span>
                            <del class="fz-24 sp-99">￥{{item.MaxPrice}}</del>
                        </p>
                    </div>
                </div>

                <!-- 优惠活动/产品特色/行程亮点 -->
                <div class="div-area2">
                    <div class="div-col">
                        <div v-on:click='showlist("优惠活动")'>
                            <p class="div-col-l fz-28 sp-66">
                                优惠活动
                                <span v-for="(y,index) in item.TFavouredPolicy" :key="index" class="fz-24 sp-danger sp-l04">{{y}}</span>
                            </p>                   
                            <p class="div-col-r fz-24 sp-99">详情<i class="iconfont icon-xiayibu"></i></p>
                        </div>

                        <div class="click-bg" v-show="isshow == '优惠活动'" v-on:click='showlist("")'></div>
                        <div class="div-pop-full" v-show="isshow == '优惠活动'">
                            <h5 class="sp-primary2 fz-36">优惠活动</h5>
                            <div class="div-list2">
                                <ul>
                                    <li v-for="(y,index) in item.TFavouredPolicy" :key="index">
                                        <h5><span class="click-chooke"><img src="@/assets/Images/勾选.png" /></span> <span class="fz-30">{{y}}</span></h5>
                                        <p class="fz-26 sp-33">Y标签详细说明</p>
                                    </li>
                                </ul>
                                <br />
                            </div>
                            <div class="div-pop-btn">
                                <h6 v-on:click='showlist("")'>确定</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 出发城市/结束城市/出发日期 -->
                <div class="div-area2">
                    <div class="div-col">
                        <p class="div-col-l"><span class="fz-28 sp-66">出发城市</span><span class="fz-24 sp-33 sp-l04">{{item.TripStartGround}}</span></p>
                    </div>
                    <div class="div-col">
                        <p class="div-col-l"><span class="fz-28 sp-66">结束城市</span><span class="fz-24 sp-33 sp-l04">{{item.TripEndGround}}</span></p>
                    </div>
                    <div class="div-col">
                        <div v-on:click='showlist("出发日期")'>
                            <p class="div-col-l"><span class="fz-28 sp-66">出发日期</span><span class="fz-24 sp-primary2 sp-l04">{{dg.sdat}}</span></p>
                            <p class="div-col-r fz-24 sp-99">选择<i class="iconfont icon-xiayibu"></i></p>
                        </div>
                        <div class="click-bg" v-show="isshow == '出发日期'" v-on:click='showlist("")'></div>
                        <div class="div-pop-full" style="top:3rem" v-show="isshow == '出发日期'">
                            <h5 class="sp-primary2 fz-36">出发日期</h5>
                            <Dateshow :item = (this.item) myclass="div-calendar2" @getchoosedeta = "getchoosedeta"></Dateshow>
                            <!-- <div class="div-calendar2">
                                <div class="div-calendar-y">
                                    <ul>
                                        <li>
                                            <div class="year-pg">
                                                <p v-on:click="nextpg(-1)"><i class="iconfont icon-fanhui fz-20" style="color:#333"></i></p>
                                                
                                            </div>
                                        </li>
                                        <li v-for="(y,n) in rl.years" :key="n">
                                            <div class="year-card">
                                                <p class="fz-22" v-bind:class="{'year-act': y==rl.selyear}" v-on:click="yearclick(y,n)">{{y.Key}}年{{y.Val}}月</p>                                   
                                            </div>
                                        </li>
                                        <li>
                                            <div class="year-pg">
                                                <p v-on:click="nextpg(1)"><i class="iconfont icon-xiayibu fz-20"></i></p>
                                                
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="div-calendar-d">
                                    <ul>
                                        <li>
                                            <h4>日</h4>
                                        </li>
                                        <li>
                                            <h4>一</h4>
                                        </li>
                                        <li>
                                            <h4>二</h4>
                                        </li>
                                        <li>
                                            <h4>三</h4>
                                        </li>
                                        <li>
                                            <h4>四</h4>
                                        </li>
                                        <li>
                                            <h4>五</h4>
                                        </li>
                                        <li>
                                            <h4>六</h4>
                                        </li>
                                        <li v-for="(m,n) in rl.rls" :key="n">
                                            <div class="day-card" v-if="m.s<0">
                                                <h6 class="sp-cc fw-5 fz-24">{{m.d}}</h6>
                                            </div>
                                            <div class="day-card" v-else-if="m.s==0">
                                                <h6 class="sp-aa fw-5 fz-24">{{m.d}}</h6>
                                            </div>
                                            <div class="day-card" v-else-if="m.s>0 && minprice(m)<=0">
                                                <h6 class="sp-66 fw-5 fz-24">{{m.d}}</h6>
                                            </div>
                                            <div class="day-card sp-a" v-else  v-bind:class="{'day-act': m==rl.selday}" v-on:click="dayclick(m,n)">
                                                
                                                <h6 class="fz-28 sp-33">{{m.d}}</h6>
                                                <p class="fz-24 sp-price">￥{{minprice(m)}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <br />
                                </div>
                            </div> -->
                            <div class="div-pop-btn">
                                <h6 v-on:click='showlist("")'>确定</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link :to="{name:'addshop',params:{choosedate:this.rl.choosedate}}">
            <h2>确定</h2>
        </router-link>
        <router-link :to="{name:'myindex'}"><h3>我的</h3></router-link>
    </div>
</template>
<script>
//swiper
import Swiper from 'swiper'

export default {
    name:'Details',
    data(){
        return{
            item:[],//行程
            dg:'',

            //日历
            rl:'',

            tripid:'0',
            isshow:[],
        }
    },
    created:function(){
        //获取上级路由中产品ID
        this.tripid = this.$route.params.tripId;
        this.getitem();
        //this.getyears();
    },
    mounted:function(){
       // this.myswiper11()
    },
    methods:{
        myswiper11:function(){
            var swiper11 = new Swiper('#swiper11', {
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                },
            });
        },

        //弹窗
        showlist:function(n){
            this.isshow = n;
            //console.log(this.isshow);           
        },

        //行程
        getitem:function(){
            this.$axios.get('/API/Trip/GetByID',{
                params:{
                    id:this.tripid,
                }
            }).then(res=>{
                this.item = res.data;
                //console.log(this.item);
                setTimeout(() => {
                    this.myswiper11();
                }, 0);
            })
            .catch(err=>{
                console.log('获取异常',err)
            })
        },

        //获取子组件传值
        getchoosedeta:function(dg,rl){
            this.dg = dg;
            this.rl = rl;
            
            //console.log(this.dg)
            //console.log(this.rl)
        }
    },
    

    //导航守卫，处理弹窗返回逻辑
    beforeRouteLeave(to, from, next){
        console.log(to);
        console.log(from);
        if (this.isshow){
            next(false)     
            this.isshow = ''
            
        }else{
            next(true); 
        }
    },
}
</script>