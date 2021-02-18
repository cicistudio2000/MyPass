<template>
 <div id="app"> 
  
      <!-- 这里是需要keepalive的 -->
      <!-- <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive> -->

      <!-- 这里不会被keepalive -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        timer: '',
        value: 0,
        debugInfo:''
      };
    },
    mounted() {
    },
    methods: {
       
    },
    beforeDestroy() {
     
    } 
  };
</script>
<style>
body {
	margin: 0;
	padding: 0;
	border: 0;
	font-family: Microsoft Yahei, Arial, sans-serif;
  overflow-x: hidden;
}
</style>
