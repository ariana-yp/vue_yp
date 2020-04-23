<template>
    <div class="div-center">
        <div class="div-center-body">
            <TopTitle :title="title"></TopTitle>

            <div class="div-area2">
            <div class="div-ico">
                <div class="div-hr10"></div>
                <img src="@/assets/Images/组 580.png" />
                <div class="div-hr05"></div>
            </div>
            <h4>{{this.$store.state.islogin}}</h4>
            <div class="div-form">
                <ul>
                    <li>
                        <div class="form-item">
                            <el-input v-model="qry.name"  placeholder="邮箱/手机号码"></el-input>                            
                        </div>
                    </li>
                    <li>
                        <div class="form-item">
                            <el-input v-model="qry.pwd"  placeholder="输入登陆密码"  show-password></el-input>                           
                        </div>
                    </li>
                    <li>
                        <div class="form-item">
                            <el-checkbox v-model="qry.ischecked"><span class="fz-26">自动登录</span></el-checkbox>
                            <span class="fz-24 sp-danger sp-l02" v-show="true">错误:信息</span>
                            <!-- msg.err {{msg.txt}} -->
                        </div>
                    </li>
                    <li>
                        <div class="form-item">
                            <p class="p-btn-ok sp-a" v-on:click="submit()" >登 录</p>
                        </div>
                    </li>
                    <li>
                        <div class="form-item">
                            <div class="div-a2">
                                <a href="#">
                                    <p>忘记密码？</p>
                                </a>
                                <a href="#">
                                    <p>新用户注册</p>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- <el-divider><span class="fz-24 sp-66">其他方式登录</span></el-divider>
            <div class="login-other">
                <div class="login-other-item">
                    <img src="~/Images/ico/微信.png" />
                </div>
                <div class="login-other-item">
                    <img src="~/Images/ico/QQ (2).png" />
                </div>
                <div class="login-other-item">
                    <img src="~/Images/ico/微博 (1).png" />
                </div>
                <br />
            </div> -->
            <!-- <div class="div-hr60"></div> -->
        </div>

        <div class="div-area2">
            <div class="foot-img">
                <img src="@/assets/Images/图层 1.png" />
                <p>登录即同意逍遥行《用户服务协议》</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Qs from 'qs';

export default {
    name:'Login',
    data(){
        return{
            qry: {
                name: "",
                pwd: "",
                ischecked: true,
            },
            msg: {
                err: false,
                txt: "",
            },
        }
    },
    props:['title'],
    methods:{
        submit:function(){
            //设置请求头
            this.$axios.post('/Home/Login',Qs.stringify(this.qry),)
            .then(res => {              
               if (res.data && res.data.length>0) {
                   this.msg.err = true;
                   this.msg.txt = res.data;
                   setTimeout(() => {
                       this.clear();
                   }, 3000);
                   console.log('登录失败')
               }else{
                    this.msg.err = false;
                    this.msg.txt = "";
                    console.log('登录成功');
                    //this.$router.push({name:'home'})
                    console.log(res.data)
                    this.logintrue();
                    //this.$router.go(-1)
               }
            })
            .catch(err => {
                console.error("请求失败",err); 
            })
        },
        clear: function () {
                this.msg.err = false;
                this.msg.txt = "";
            },

        // 修改登录状态，提交vuex中的mutation
        logintrue:function(){
            this.$store.commit('changelogin', true)
        }
    }
}
</script>