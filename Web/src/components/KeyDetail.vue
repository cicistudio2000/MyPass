<template>
    <div id="home">
        <Header :isShowBackIcon= 'isShowBackIcon' headerTitle="www.chengchen.net"></Header>
         <mt-field label="名称" :disabled="true" placeholder="" v-model="myName"></mt-field>
         <mt-button @click="submit" type="primary" size="large">修改</mt-button>    
         <mt-field label="备注" placeholder="" type="textarea" v-model="remarks"></mt-field>       
        <mt-field label="用户1" placeholder="" v-model="username1"></mt-field>
        <mt-field label="密码1" placeholder="" v-model="password1"></mt-field>
         <mt-field label="用户2" placeholder="" v-model="username2"></mt-field>
        <mt-field label="密码2" placeholder="" v-model="password2"></mt-field>
         <mt-field label="用户3" placeholder="" v-model="username3"></mt-field>
        <mt-field label="密码3" placeholder="" v-model="password3"></mt-field>
         <mt-field label="用户4" placeholder="" v-model="username4"></mt-field>
        <mt-field label="密码4" placeholder="" v-model="password4"></mt-field>
         <mt-field label="用户5" placeholder="" v-model="username5"></mt-field>
        <mt-field label="密码5" placeholder="" v-model="password5"></mt-field>
         <mt-field label="用户6" placeholder="" v-model="username6"></mt-field>
        <mt-field label="密码6" placeholder="" v-model="password6"></mt-field>
         <mt-field label="用户7" placeholder="" v-model="username7"></mt-field>
        <mt-field label="密码7" placeholder="" v-model="password7"></mt-field>
        <mt-field label="用户8" placeholder="" v-model="username8"></mt-field>
        <mt-field label="密码8" placeholder="" v-model="password8"></mt-field>
         <mt-field label="用户9" placeholder="" v-model="username9"></mt-field>
        <mt-field label="密码9" placeholder="" v-model="password9"></mt-field>
    </div>
</template>

<script>
import Header from './Header';
import TestKeys from '../js/keys.json'

export default {
    data() {
    return {
        isShowBackIcon:true,
        remarks:null,
        myName:decodeURIComponent(this.$route.query.myName),
        username1:null,
        username2:null,
        username3:null,
        username4:null,
        username5:null,
        username6:null,
        username7:null,
        username8:null,
        username9:null,
        password1:null,
        password2:null,
        password3:null,
        password4:null,
        password5:null,
        password6:null,
        password7:null,
        password8:null,
        password9:null,
        MyTestKeys:TestKeys
     };
    },
    components:{
        Header
    },
    mounted(){
         var filterKeys = TestKeys.filter(mykey=>{
                 if(mykey.Name.toLowerCase() === this.myName.toLowerCase())
                    return true;
            })
        if(filterKeys.length===0){
            this.$Common.showMessage("系统出错，无法加载数据，请联系管理员"); 
            return;
        }

        this.remarks = filterKeys[0].Remark;

        for(var i = 0; i < filterKeys[0].Keys.length; i++) {
            switch(i){
                case 0:
                    this.username1 = filterKeys[0].Keys[i].UserName;
                    this.password1 = filterKeys[0].Keys[i].Password;
                    break;
                case 1:
                    this.username2 = filterKeys[0].Keys[i].UserName;
                    this.password2 = filterKeys[0].Keys[i].Password;
                    break;
                case 2:
                    this.username3 = filterKeys[0].Keys[i].UserName;
                    this.password3 = filterKeys[0].Keys[i].Password;
                    break;
                case 3:
                    this.username4 = filterKeys[0].Keys[i].UserName;
                    this.password4 = filterKeys[0].Keys[i].Password;
                    break; 
                case 4:
                    this.username5 = filterKeys[0].Keys[i].UserName;
                    this.password5 = filterKeys[0].Keys[i].Password;
                    break; 
                case 5:
                    this.username6 = filterKeys[0].Keys[i].UserName;
                    this.password6 = filterKeys[0].Keys[i].Password;
                    break; 
                case 6:
                    this.username7 = filterKeys[0].Keys[i].UserName;
                    this.password7 = filterKeys[0].Keys[i].Password;
                    break; 
                case 7:
                    this.username8 = filterKeys[0].Keys[i].UserName;
                    this.password8 = filterKeys[0].Keys[i].Password;
                    break; 
                case 8:
                    this.username9 = filterKeys[0].Keys[i].UserName;
                    this.password9 = filterKeys[0].Keys[i].Password;
                    break; 
            }
            
        }
    
    },
    methods:{
       submit(){
            var filterKeys = TestKeys.filter(mykey=>{
                 if(mykey.Name.toLowerCase() === this.myName.toLowerCase())
                    return true;
            })
            if(filterKeys.length===0){
                this.$Common.showMessage("系统出错，无法加载数据，请联系管理员"); 
                return;
            }

            filterKeys[0].Remark = this.remarks;

            var keys = [
                {UserName:this.username1, Password: this.password1},
                {UserName:this.username2, Password: this.password2},
                {UserName:this.username3, Password: this.password3},
                {UserName:this.username4, Password: this.password4},
                {UserName:this.username5, Password: this.password5},
                {UserName:this.username6, Password: this.password6},
                {UserName:this.username7, Password: this.password7},
                {UserName:this.username8, Password: this.password8},
                {UserName:this.username9, Password: this.password9},
            ];

            filterKeys[0].Keys = keys;

       },
    },
    updated(){
        window.scroll(0, 0);
    }
}
</script>

<style type="text/css">

</style>

