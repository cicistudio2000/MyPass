<template>
    <div id="header">
    <mt-header fixed :title="headerTitle">
        <mt-button v-if="isShowBackIcon" slot="left" class="item-content open-panel" v-on:click="goback()">
            <img class="back" src="../assets/goback.png" />
        </mt-button>  
        <mt-button slot="right" class="item-content open-panel" v-on:click="settings()">
            <img class="settings" src="../assets/Settings_small.png" />
        </mt-button>  
    </mt-header>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1)
    },
    settings(){
      this.$router.push({path:'/Settings'});
    }
  },
  props:['isShowBackIcon','headerTitle']
  }
</script>

<style>
#header{
    width:100%;
    height: 40px;
    background-color: #409eff;
}
.back{
    width:30px;height:30px;
}
.settings{
    width:25px;height:25px;
}
</style>