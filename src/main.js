// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

//element-ui
import elementUI from 'element-ui'
Vue.use(elementUI)
import 'element-ui/lib/theme-chalk/index.css'

//swiper
import '../node_modules/swiper/css/swiper.min.css'

//引入全局CSS样式
import '@/assets/Content/Site.css'
import '@/assets/Content/tripm.css'

//引入阿里字体
import '@/assets/Fonts/iconfont.css'

//注册全局组件
  //头部搜索
import TopSearch from '@/components/Sharde/TopSearch';
Vue.component(TopSearch.name,TopSearch)

  //头部标题
import TopTitle from '@/components/Sharde/TopTitle'
Vue.component(TopTitle.name,TopTitle)
  //底部table
import FootSharde from '@/components/Sharde/FootSharde';
Vue.component(FootSharde.name,FootSharde)

  //日期组件
import Dateshow from '@/components/Sharde/Dateshow';
Vue.component(Dateshow.name,Dateshow)

Vue.config.productionTip = false,

//配置axios
Vue.prototype.$axios = Axios;  
//配置公共的url
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//将Vuex挂载到vue
import store from './store.js'

//将bus挂载到vue原型上
//import EventBus from '@/components/EventBus/EventBus.js'
//Vue.prototype.$bus = EventBus;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
