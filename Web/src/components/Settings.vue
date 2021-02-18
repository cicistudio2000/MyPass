<template>
    <div id = "login">
       <Header :isShowBackIcon= 'isShowBackIcon' headerTitle="www.chengchen.net"></Header>
       <mt-cell>developing in progress</mt-cell> 
    </div>
</template>
<script>
import Header from './Header';
export default {
    data() {
    return {
       isShowBackIcon:true,
     };
    },
    components:{
        Header
    },
    created()
    {
        
    },
    methods:{
    }
}
</script>
