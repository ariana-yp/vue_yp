import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'
//引入
// import Home from '@/components/Home/Home'
// import Address from '@/components/Home/Address'
// import Details from '@/components/Product/Details'
// import AddShop from '@/components/Product/AddShop'
// import Login from '@/components/Users/Login'
// import Myindex from '@/components/Users/Myindex'


//按需加载引入模块
//1、npm install babel-plugin-syntax-dynamic-import --save-dev
//2、babelrc文件中的plugins中添加["syntax-dynamic-import"]
//3、
const Home =()=>import ( '@/components/Home/Home');
const Address =()=>import ( '@/components/Home/Address');
const Details =()=>import ( '@/components/Product/Details');
const AddShop =()=>import ( '@/components/Product/AddShop');
const Login =()=>import ( '@/components/Users/Login');
const Myindex =()=>import ( '@/components/Users/Myindex');


//使用vue-router插件 vue.prototype.$router = Router；
Vue.use(Router)

const router = new Router({
  //去除'#'符号
  //mode: 'history',
  //匹配的路由规则
  routes: [
    {
      //重对象，修改初始页面路由
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/home/address',
      name:'address',
      component:Address
    },
    {
      path:'/product/Details/:tripId',
      name:'details',
      component:Details,
    },
    {
      path:'/product/Details/:tripId/addshop',
      name:'addshop',
      component:AddShop,
      props:{
        title:'加入购物车'
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      props:{
        title:'登录',
      },
    },
    {
      path:'/user/myindex',
      name:'myindex',
      component:Myindex,
      props:{
        title:'个人中心',        
      },
      meta:{checklogin:true}
    },
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to.meta.checklogin)
  if (to.meta.checklogin && !store.state.islogin) {
    next({name:'login'})
  } else {
    next()
  }
  
})

// console.log(to)
// console.log(store.state.islogin);
// next();
export default router;