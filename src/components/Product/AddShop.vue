<template>
    <div class="div-center">
        <div class="div-center-body">
            <TopTitle :title="title"></TopTitle>
            <div class="div-area2">
                <Dateshow :item = (this.item) :choosedate = this.choosedate myclass="div-calendar" @getchoosedeta = "getchoosedeta"></Dateshow>
            </div>
            <div class="div-area2">
                <!-- 团期 -->
                <div>
                    <div class="div-col">
                        <p class="div-col-l">
                            <span class="fz-28 sp-66">选择团期</span>
                            <span class="fz-24 sp-88 sp-l02" v-show="dg.seldaycnt>0">从</span>
                            <span class="fz-24 sp-primary2" v-show="dg.seldaycnt>0">{{dg.sdat}}</span>
                            <span class="fz-24 sp-88 sp-c02" v-show="dg.seldaycnt>0">至</span>
                            <span class="fz-24 sp-primary2" v-show="dg.seldaycnt>0">{{dg.edat}}</span>
                        </p>
                        <p class="div-col-r">
                            <span class="fz-24 sp-66">共</span>
                            <span class="fz-24 sp-primary2">{{item.TripDay}}</span>
                            <span class="fz-24 sp-66">天</span>
                        </p>
                    </div>
                </div>

                <!-- 房型 -->
                <div>
                    <div class="div-col">
                        <div >
                            <!-- v-on:click="selwin(1020)" -->
                            <p class="div-col-l"><span class="fz-28 sp-66">选择房型</span></p>
                            <p class="div-col-r fz-20 sp-99">
                                <el-button @click="drawer1 = true"><i class="iconfont icon-xiayibu"></i></el-button>
                            </p>
                        </div>
                        <el-drawer title="我是标题" :visible.sync="drawer1" :direction="'btt'" :with-header="false" :size="size">
                            <h5 class="sp-primary2 fz-36 pop-title">选择房型</h5>
                            <div class="div-pop-body">
                                <div class="div-col" v-for="(m,index) in dg.room" :key="index">
                                    <div class="div-col-l">
                                        <p >
                                            <span class="fz-28 sp-danger sp-l02 click-chooke2">
                                                <img  v-show="m.SelNum==0" src="@/assets/Images/未勾选.png"/>
                                                <img v-show="m.SelNum>0" src="@/assets/Images/勾选.png" />
                                            </span>           
                                            <span class="fz-24 sp-33">{{m.Name}}</span>
                                            <span class="fz-20 sp-price">(￥222 / 人)</span>
                                        </p>
                                    </div>
                                    <div class="div-col-r">
                                        <p>
                                            <span class="fz-30 sp-66 sp-c02" ><i class="iconfont icon-fanhui sp-33"></i></span>
                                            <span class="fz-30 sp-dd sp-c02" v-if="m.SelNum<=0">{{m.SelNum}}</span>
                                            <span class="fz-30 sp-danger sp-c02" v-else>{{m.SelNum}}</span>
                                            <span class="fz-30 sp-66 sp-c02" ><i class="iconfont icon-xiayibu"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="div-pop-btn">
                                <h6 @click="drawer1 = false">确定</h6>
                            </div>    
                        </el-drawer>
                        <!-- <div class="click-bg" v-show="true" ></div>
                        <div class="div-pop-full" v-show="1">
                            <div class="div-pop-body">
                                <div class="div-col" v-for="(m,index) in dg.room" :key="index">
                                    <div class="div-col-l">
                                        <p >
                                            <span class="fz-28 sp-danger sp-l02 click-chooke2">
                                                <img  v-show="m.SelNum==0" src="@/assets/Images/未勾选.png"/>
                                                <img v-show="m.SelNum>0" src="@/assets/Images/勾选.png" />
                                            </span>           
                                            <span class="fz-24 sp-33">{{m.Name}}</span>
                                            <span class="fz-20 sp-price">(￥222 / 人)</span>
                                        </p>
                                    </div>
                                    <div class="div-col-r">
                                        <p>
                                            <span class="fz-30 sp-66 sp-c02" ><i class="iconfont icon-fanhui sp-33"></i></span>
                                            <span class="fz-30 sp-dd sp-c02" v-if="m.SelNum<=0">{{m.SelNum}}</span>
                                            <span class="fz-30 sp-danger sp-c02" v-else>{{m.SelNum}}</span>
                                            <span class="fz-30 sp-66 sp-c02" ><i class="iconfont icon-xiayibu"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="div-pop-btn">
                                <h6 >确定</h6>
                            </div>
                        </div> -->
                    </div>
                    <!-- <div class="div-col" v-for="(m,index) in dg.room" :key="index" v-show="m.SelNum>0" >
                        <div class="div-col-l">
                            <p><span class="sp-danger click-chooke3"><img src="~/Images/ico/路径 196.png" /></span><span class="fz-24 sp-88">{{m.Name}} * {{m.SelNum}}</span></p>
                        </div>
                        <div class="div-col-r">
                            <p><span class="fz-24 sp-price sp-c02">￥{{rate(m.cPrice,item.RateNum)}} / 人</span></p>
                        </div>
                    </div> -->
                </div>

                <!-- 接送机 -->
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AddShop',
    data(){
        return{
            item:[],
            dg:'',
            rl:'',//日历
            tripid:0,
            choosedate:'',//接收详情传递的已选日期

            //接收已选择的项目
            db:{
                room:[] //房型
            },

            //弹窗
            drawer1:false,
            //direction: 'btt',
            size:'60%',
            
        }
    },
    props:['title'],
    created:function(){
        this.tripid = this.$route.params.tripId;
        this.choosedate = this.$route.params.choosedate;
        console.log(this.choosedate);
        console.log('123')        
        this.getitem();
    },
    methods:{
        
        //获取子组件传值
        getchoosedeta:function(dg,rl){
            this.dg = dg;
            this.rl = rl;
        },

        //行程
        getitem:function(){
            this.$axios.get('/API/Trip/GetByID',{
                params:{
                    id:this.tripid,
                }
            }).then(res=>{
                this.item = res.data;
            })
            .catch(err=>{
                console.log('获取异常',err)
            })
        },
    },
    //导航守卫，处理弹窗返回逻辑
    beforeRouteLeave(to, from, next){
        console.log(to);
        console.log(from);
        if (this.drawer1){
            next(false)     
            this.drawer1 = false;
            
        }else{
            next(true); 
        }
    },
}
</script>