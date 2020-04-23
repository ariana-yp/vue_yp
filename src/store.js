import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //存放五大将
    state:{
        islogin:false
        // localStorage.getItem('islogin') || 
    },
	getters:{},
    mutations:{
        changelogin(state,m){
            state.islogin = m
        }
    }
})