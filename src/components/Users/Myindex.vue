<template>
    <div>
        <TopTitle :title="title"></TopTitle>
        <p>{{me.Name}}</p>
        <p>{{me.Name}}</p>
        <p>{{me.Name}}</p>
        <p>{{me.Name}}</p>
    </div>
</template>
<script>
export default {
    name:'Myindex',
    data(){
        return{
            me:{},
        }
    },
    props:['title'],
    created:function(){
        this.getme();
    },
    methods:{
        getme:function(){
            //该请求携带cookie
            this.$axios.get('/API/Client/GetMe')
            .then(res => {
                this.me = res.data;
                console.log(this.me.Name)
                this.islogin = true;
            })
            .catch(err => {
                console.log('获取失败',err); 
                //this.$router.push({name:'login'})
            })
        }
    },
}
</script>