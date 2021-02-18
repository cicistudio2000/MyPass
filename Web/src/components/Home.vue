<template>
    <div id="home">
        <Header :isShowBackIcon= 'isShowBackIcon' headerTitle="www.chengchen.net"></Header>
         <mt-field label="搜索" placeholder="关键字" v-model="searchKey"></mt-field>
         <mt-button @click="newKey" type="primary" size="large">新建密钥</mt-button>       
        <mt-cell v-for="myKey in MyTestKeys" v-bind:key="myKey.Name" :to="{path:'/KeyDetail', query:{myName: encodeURIComponent(myKey.Name)}}" :title=myKey.Name></mt-cell>
    </div>
</template>

<script>
import Header from './Header';
import TestKeys from '../js/keys.json'

export default {
    data() {
    return {
        isShowBackIcon:false,
        searchKey:null,
        MyTestKeys:TestKeys
     };
    },
    components:{
        Header
    },
    watch: {
    searchKey(val, oldval) {
            this.MyTestKeys = TestKeys.filter(mykey=>{
                if(val === null || val === "")
                    return true;

                if(mykey.Name.toLowerCase().indexOf(val.toLowerCase())!=-1)
                    return true;
            })
            
        }
    },
    methods:{
        newKey(){
            this.$router.push({path:'/NewKey'});
        }
    },
    updated(){
        window.scroll(0, 0);
    }
}
</script>

<style type="text/css">

</style>

