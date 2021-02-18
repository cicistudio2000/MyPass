<template>
    <div id = "login">
       <Header :isShowBackIcon= 'isShowBackIcon' headerTitle="www.chengchen.net"></Header>
       <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
       <mt-button @click="submit" type="primary" size="large">确定</mt-button>    
    </div>
</template>
<script>
import { Collapse,Icon} from 'iview';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import Header from './Header';

export default {
    data() {
    return {
       isShowBackIcon : false,
       password:null
     };
    },
    components:{
        Collapse,
        Icon,
        Header
    },
    created()
    {
        
    },
    methods:{
        submit(){
           if(this.password != "123456"){
                this.$Common.showMessage("无效的密码！"); 
                return;
           }

        this.$router.push({path:'/Home'});
           
        },
    }
}
</script>

