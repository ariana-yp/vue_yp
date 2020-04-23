<template>
    <div :class="(myclass)">
                        <div class="div-calendar-y">
                            <ul>
                                <li>
                                    <div class="year-pg">
                                        <p v-on:click="nextpg(-1,1)"><i class="iconfont icon-fanhui fz-20" style="color:#333"></i></p>
                                        
                                    </div>
                                </li>
                                <li v-for="(y,n) in rl.years" :key="n">
                                    <div class="year-card">
                                        <p class="fz-22" v-bind:class="{'year-act': y==rl.selyear}" v-on:click="yearclick(y,n,1)">{{y.Key}}年{{y.Val}}月</p>                                   
                                    </div>
                                </li>
                                <li>
                                    <div class="year-pg">
                                        <p v-on:click="nextpg(1,1)"><i class="iconfont icon-xiayibu fz-20"></i></p>
                                        
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
                                    <div class="day-card sp-a" v-else  v-bind:class="{'day-act': m==rl.selday}" v-on:click="dayclick(m,n),sendate()">
                                        <!-- <h2>{{rl.selday}}</h2>
                                        <h3>{{m}}</h3> -->
                                        <h6 class="fz-28 sp-33">{{m.d}}</h6>
                                        <p class="fz-24 sp-price">￥{{minprice(m)}}</p>
                                    </div>
                                </li>
                            </ul>
                            <br />
                        </div>
                        
                    </div>
</template>
<script>
export default {
    name:'Dateshow',
    data(){
        return{
            dg: {
                sdat: "",
                seldaycnt: 0,
                selyearcnt:0,
                edat: "",   //结束日期
                room:[], //房型
                needrefed:false,
                
            },

            //日历
            rl: {
                pg: 0,
                years: [],
                selyear: "",
                rls: [],
                jgs: [],
                prices: [],
                selday: [],
                seljg: {
                    p1: "无",
                    p2: "无",
                    p3: "无",
                    p4: "无",
                    pr: "无",
                    pp: "无",
                },
                //选择的年月等同于pg
                choosedate:{
                    choosepg:0,
                    choosepgn:0,
                    choosedayn:0,
                }
            },
        }
    },
    props:['item','myclass','choosedate'],
    created:function(){
        //获取上级路由中产品ID
        this.tripid = this.$route.params.tripId;
        console.log('执行created')
        //this.getyears(1);
    },
    mounted:function(){
       // this.myswiper11()
       //console.log(this.item)
    },
    beforeUpdate:function(){
        //console.log(this.choosedate)
    },
    updated:function(){
        //console.log(this.choosedate)
    },
    methods:{        

        //年月
        getyears:function(n){
            if (n == 1) {
                this.$axios.get('/API/BaseAPI/GetYears',{
                    params:{
                        pg:this.rl.pg,
                    }
                }).then(res=>{
                    this.rl.years = res.data;
                    this.yearclick(this.rl.years[0],0,1)
                    //console.log(this.rl.years)
                    console.log('执行年月1')
                })
                .catch(err=>{
                    console.log('获取异常1',err)
                })
            }else{
                this.$axios.get('/API/BaseAPI/GetYears',{
                    params:{
                        pg:this.rl.pg,
                    }
                }).then(res=>{
                    this.rl.years = res.data;
                    console.log(this.choosedate.choosepgn)
                    //console.log(this.rl.years[newV.choosepgn]);
                    this.yearclick(this.rl.years[this.choosedate.choosepgn],this.choosedate.choosepgn,2)
                    //console.log(this.rl.years)
                    console.log('执行年月2')
                })
                .catch(err=>{
                    console.log('获取异常2',err)
                })
            }
            
        },

        //日历
        getrili:function(date,m){
            if (m == 1) {
                this.$axios.get('/API/BaseAPI/GetRiLiByDate',{
                    params:{
                        date:date,
                    }
                }).then(res=>{
                    this.rl.rls = res.data; 
                    //console.log(this.rl.rls[25])
                })
                .catch(err=>{
                    console.log('获取异常',err)
                })
            } else {
                this.$axios.get('/API/BaseAPI/GetRiLiByDate',{
                    params:{
                        date:date,
                        }
                }).then(res=>{
                    this.rl.rls = res.data; 
                    //console.log(this.rl.rls[25])
                    this.dayclick(this.rl.rls[this.choosedate.choosedayn],this.choosedate.choosedayn);
                    this.sendate();
                    console.log('执行模拟点击日期')
                })
                .catch(err=>{
                    console.log('获取异常',err)
                })
            }
        },
        

        //跳转年月
        nextpg:function(n,m){
            if (m == 1) {
                if (n<0) {
                    if (this.rl.pg >0) {
                        this.rl.pg = this.rl.pg + n;
                        this.rl.choosedate.choosepg = this.rl.pg
                        this.getyears(1);
                    }
                }else{
                    this.rl.pg = this.rl.pg + n;
                    this.rl.choosedate.choosepg = this.rl.pg
                    this.getyears(1);
            };
            //console.log(this.rl.choosedate.choosepg);
            }else{
                if (n<0) {
                    if (this.rl.pg >0) {
                        this.rl.pg = this.rl.pg + n;
                        this.getyears(2);
                    }
                }else{
                    this.rl.pg = this.rl.pg + n;
                    this.getyears(2);
                };
            //console.log(this.rl.choosedate.choosepg);
            }
            
        },

        //选择年月
        yearclick:function(y,n,m){
            if (m == 1) {
                this.rl.selyear = y;
                console.log(this.rl.selyear.Key);
                this.dg.selyearcnt = n;
                this.rl.choosedate.choosepgn = n
                //console.log(this.rl.choosedate.choosepgn)
                var date = y.Key + "-" + y.Val;
                this.getrili(date,1);
                this.getjgs();
                console.log('执行1')
            }else{
                this.rl.selyear = y;
                console.log(this.rl.selyear.Key);
                this.dg.selyearcnt = n;
                var date = y.Key + "-" + y.Val;
                this.getrili(date,2);
                this.getjgs();
                console.log('执行2')
            }
            
        },

        //选择日期
        dayclick:function(obj,n){
            this.rl.selday = obj;
            console.log(this.rl.selday.y);
            this.dg.sdat = obj.y + "年" + obj.m + "月" + obj.d + "日";
            this.dg.seldaycnt = n;
            this.rl.choosedate.choosedayn = n;
            //console.log(this.rl.choosedate.choosedayn)
            var arg = obj.y+"-"+ obj.m +"-"+obj.d;

            //获取结束日期函数
            this.getedat(arg);
            this.dg.needrefed = true;
            console.log(this.dg.needrefed);
            this.refroom();
                console.log('执行获取房型')
        },

        //对已经选择日期的产品进行模拟点击添加日期样式
        yearsclick2:function(){

            console.log('模拟点击');
        },

        getedat:function(arg){
            var date1 = new Date(arg);
            date1.setDate(date1.getDate()+this.item.TripDay);
            var times = date1.getFullYear()+"年"+(date1.getMonth()+1)+"月"+date1.getDate()+"日";
            this.dg.edat = times;
            //console.log(this.dg.edat);
        },
        //获取价格

        getjgs:function(){
            var qry = {
                tripid: this.tripid,
                y: this.rl.selyear.Key,
                m: this.rl.selyear.Val,
            };
            this.$axios.get('/API/Trip/GetTripPrices',{
                params:qry,
            }).then(res=>{
                this.rl.jgs = res.data;
            })
            .catch(err=>{
                console.log('获取异常',err)
            })
        },

        //房型
        refroom: function () {
                    var obj = this.rl.selday;
                    console.log(obj);
                    var jg = this.rl.jgs.filter(x => x.Y == obj.y && x.M == obj.m && x.D == obj.d);
                    //排序
                    this.dg.room = jg.sort(function (a, b) { return b.cPrice - a.cPrice; });     
                    console.log(this.dg.room);
        },

        //最少价格
        minprice: function (obj) {
            if (this.rl.jgs && this.rl.jgs.length > 0) {
                var temp = this.rl.jgs.find(x => x.Y == obj.y && x.M == obj.m && x.D == obj.d);
                if (temp) {         
                    return (temp.cPrice * this.item.RateNum).toFixed(0);
                } else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        },
        sendate:function(){
            this.$emit('getchoosedeta',this.dg,this.rl)
        }
    },
    watch:{

        //对象监听
        choosedate:{
            handler(newV,oldV){
                console.log(newV,oldV)
                if (newV) {
                    console.log("开始执行watch函数")
                    console.log(newV.choosepgn);
                    this.nextpg(newV.choosepg,2);
                }else{
                    console.log('执行默认日期请求')
                    this.getyears(1);
                };
                 console.log("watch函数执行结束")
                //console.log(this.rl.selday.d);
                //this.yearsclick2(newV)
            },
            //深度监听
            deep: true,

            //最初绑定值的时候也执行函数，需要用到immediate属性。 
            immediate: true
        },
    }
}
</script>