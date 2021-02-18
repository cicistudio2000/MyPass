<template>
    <div id="home">
        <Header :isShowBackIcon= 'isShowBackIcon' headerTitle="www.chengchen.net"></Header>
         <mt-field label="名称" placeholder="" v-model="myName"></mt-field>
         <mt-button @click="submit" type="primary" size="large">确定</mt-button>    
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
        myName:null,
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
    methods:{
        submit(){
            if(this.$Common.isEmpty(this.myName)){
                this.$Common.showMessage("名称不能为空！");
                return;
            }

            var filterKeys = MyTestKeys.filter(mykey=>{
                 if(mykey.Name.toLowerCase() === this.myName.toLowerCase())
                    return true;
            })

            if(filterKeys.length>0){
                  this.$Common.showMessage("不能和现有的名称重复！");
                return;
            }

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
            var newKey = { Name: this.myName, Remark:this.remarks, Keys:keys};
            MyTestKeys.push(newKey);
        }
    },
    updated(){
        window.scroll(0, 0);
    }
}
</script>

<style type="text/css">

</style>

